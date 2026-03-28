import { assertSupabaseConfigured } from "../lib/supabaseClient";

export async function fetchProfile(userId) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, current_level, total_score")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function upsertProfile({ id, username, currentLevel = 1, totalScore = 0 }) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        id,
        username,
        current_level: currentLevel,
        total_score: totalScore,
      },
      { onConflict: "id" },
    )
    .select("id, username, current_level, total_score")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateProfileMetrics(userId, metrics) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("profiles")
    .update(metrics)
    .eq("id", userId)
    .select("id, username, current_level, total_score")
    .single();

  if (error) {
    throw error;
  }

  return data;
}
