import { assertSupabaseConfigured } from "../lib/supabaseClient";

export async function fetchJournals(userId) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("journals")
    .select("id, user_id, content, emotion_tag, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function createJournalEntry({ userId, content, emotionTag }) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("journals")
    .insert({
      user_id: userId,
      content,
      emotion_tag: emotionTag,
    })
    .select("id, user_id, content, emotion_tag, created_at")
    .single();

  if (error) {
    throw error;
  }

  return data;
}
