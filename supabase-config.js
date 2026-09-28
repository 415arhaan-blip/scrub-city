// Fill these in from your Supabase dashboard: Project Settings -> API
// SUPABASE_URL looks like: https://xxxxxxxxxxxx.supabase.co
// SUPABASE_ANON_KEY is the long "anon public" key (safe to expose in frontend code)
const SUPABASE_URL = "https://aynrmxivkdgpkjengrxh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5bnJteGl2a2RncGtqZW5ncnhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1NTA1NTIsImV4cCI6MjEwNjEyNjU1Mn0.C45pcejYONvheXzAhbipBbK7jFH4y8BTl0CAeVHnFp8";

const supabaseClient = (SUPABASE_URL.startsWith("http") && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
