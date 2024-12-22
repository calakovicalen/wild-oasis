import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://urpjrcuhqqzvujyzqejn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycGpyY3VocXF6dnVqeXpxZWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MDE1MDEsImV4cCI6MjA1MDM3NzUwMX0.DzQcdoZGtzppKBvZ6k4-mEC_mG4eZr4MtHZ7_S9B1eI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
