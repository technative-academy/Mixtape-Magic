import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project credentials
const SUPABASE_URL = "https://your-project-ref.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
