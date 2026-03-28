import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { isSupabaseConfigured } from "../../lib/supabaseClient";

function RouteStateCard({ title, message }) {
  return (
    <section className="wp-route-state">
      <div className="wp-route-state__card">
        <p className="wp-route-state__eyebrow">WhaleProof Access</p>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </section>
  );
}

export function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated, loading } = useAuth();

  if (!isSupabaseConfigured) {
    return (
      <RouteStateCard
        title="Supabase configuration is missing"
        message="Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values before using protected learning modules."
      />
    );
  }

  if (loading) {
    return (
      <RouteStateCard
        title="Checking your session"
        message="Loading your WhaleProof access state."
      />
    );
  }

  if (!isAuthenticated) {
    return <Navigate replace to="/sign_in" state={{ from: location }} />;
  }

  return <Outlet />;
}
