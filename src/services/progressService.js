import { LEARNING_PHASES, PHASE_SCORE } from "../constants/phases";
import { assertSupabaseConfigured } from "../lib/supabaseClient";
import { updateProfileMetrics } from "./profileService";

function buildPhaseRows(userId) {
  return LEARNING_PHASES.map((phase) => ({
    user_id: userId,
    phase_name: phase.name,
    is_completed: false,
  }));
}

export async function fetchUserProgress(userId) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("user_progress")
    .select("id, user_id, phase_name, is_completed")
    .eq("user_id", userId)
    .order("id", { ascending: true });

  if (error) {
    throw error;
  }

  if (!data?.length) {
    return seedUserProgress(userId);
  }

  return syncProgressRows(userId, data);
}

export async function seedUserProgress(userId) {
  const supabase = assertSupabaseConfigured();
  const { data, error } = await supabase
    .from("user_progress")
    .insert(buildPhaseRows(userId))
    .select("id, user_id, phase_name, is_completed");

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function syncProgressRows(userId, existingRows = []) {
  const supabase = assertSupabaseConfigured();
  const existingNames = new Set(existingRows.map((row) => row.phase_name));
  const missingRows = LEARNING_PHASES.filter(
    (phase) => !existingNames.has(phase.name),
  ).map((phase) => ({
    user_id: userId,
    phase_name: phase.name,
    is_completed: false,
  }));

  if (!missingRows.length) {
    return existingRows;
  }

  const { data, error } = await supabase
    .from("user_progress")
    .insert(missingRows)
    .select("id, user_id, phase_name, is_completed");

  if (error) {
    throw error;
  }

  return [...existingRows, ...(data ?? [])];
}

export async function updatePhaseCompletion(userId, phaseName, isCompleted = true) {
  const supabase = assertSupabaseConfigured();
  const { data: existingRow, error: selectError } = await supabase
    .from("user_progress")
    .select("id")
    .eq("user_id", userId)
    .eq("phase_name", phaseName)
    .maybeSingle();

  if (selectError) {
    throw selectError;
  }

  const query = existingRow
    ? supabase
        .from("user_progress")
        .update({ is_completed: isCompleted })
        .eq("id", existingRow.id)
    : supabase.from("user_progress").insert({
        user_id: userId,
        phase_name: phaseName,
        is_completed: isCompleted,
      });

  const { error } = await query;

  if (error) {
    throw error;
  }

  const progress = await fetchUserProgress(userId);
  const completedCount = progress.filter((row) => row.is_completed).length;

  await updateProfileMetrics(userId, {
    current_level: Math.min(completedCount + 1, LEARNING_PHASES.length),
    total_score: completedCount * PHASE_SCORE,
  });

  return progress;
}
