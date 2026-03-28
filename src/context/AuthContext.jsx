import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { assertSupabaseConfigured, supabase } from "../lib/supabaseClient";
import { fetchProfile, upsertProfile } from "../services/profileService";
import { seedUserProgress } from "../services/progressService";

const AuthContext = createContext(null);

async function resolveProfile(authUser) {
  const existingProfile = await fetchProfile(authUser.id);

  if (existingProfile) {
    return existingProfile;
  }

  const username =
    authUser.user_metadata?.username ||
    authUser.email?.split("@")[0] ||
    "Trader";

  return upsertProfile({
    id: authUser.id,
    username,
  });
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (!supabase) {
      setLoading(false);
      return undefined;
    }

    const syncSession = async (nextSession) => {
      if (!isMounted) {
        return;
      }

      setSession(nextSession);
      setUser(nextSession?.user ?? null);

      if (!nextSession?.user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      try {
        const nextProfile = await resolveProfile(nextSession.user);
        if (isMounted) {
          setProfile(nextProfile);
        }
      } catch (error) {
        console.error("Failed to resolve profile.", error);
        if (isMounted) {
          setProfile(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void supabase.auth
      .getSession()
      .then(({ data }) => syncSession(data.session))
      .catch((error) => {
        console.error("Failed to fetch initial session.", error);
        if (isMounted) {
          setLoading(false);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void syncSession(nextSession);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      session,
      user,
      profile,
      isAuthenticated: Boolean(session?.user),
      loading,
      async signIn({ email, password }) {
        const client = assertSupabaseConfigured();
        const { error } = await client.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }
      },
      async signUp({ email, password, username }) {
        const client = assertSupabaseConfigured();
        const { data, error } = await client.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
            },
          },
        });

        if (error) {
          throw error;
        }

        if (data.user && data.session) {
          await upsertProfile({
            id: data.user.id,
            username,
          });
          await seedUserProgress(data.user.id);
        }

        return data;
      },
      async signOut() {
        const client = assertSupabaseConfigured();
        const { error } = await client.auth.signOut();

        if (error) {
          throw error;
        }
      },
      async refreshProfile() {
        if (!user) {
          return null;
        }

        const nextProfile = await resolveProfile(user);
        setProfile(nextProfile);
        return nextProfile;
      },
    }),
    [loading, profile, session, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
