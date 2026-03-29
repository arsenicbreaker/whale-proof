import { assertSupabaseConfigured } from "../lib/supabaseClient";

function normalizeJournalEntry(row) {
  return {
    ...row,
    note: row?.note ?? row?.content ?? "",
  };
}

export async function fetchJournals(userId) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("journals")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map(normalizeJournalEntry);
}

export async function createJournalEntry({ userId, note, emotionTag }) {
  const supabase = assertSupabaseConfigured();
  const preferredInsert = await supabase
    .from("journals")
    .insert({
      user_id: userId,
      note,
      emotion_tag: emotionTag,
    })
    .select("*")
    .single();

  if (!preferredInsert.error) {
    return normalizeJournalEntry(preferredInsert.data);
  }

  const fallbackInsert = await supabase
    .from("journals")
    .insert({
      user_id: userId,
      content: note,
      emotion_tag: emotionTag,
    })
    .select("*")
    .single();

  if (fallbackInsert.error) {
    throw fallbackInsert.error ?? preferredInsert.error;
  }

  return normalizeJournalEntry(fallbackInsert.data);
}
