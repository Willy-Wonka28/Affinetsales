import { createClient } from "@supabase/supabase-js";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const projectKey = import.meta.env.VITE_PROJECT_KEY;

export const supabase = createClient(projectUrl, projectKey);
