import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ncmumvokpnnxkskjtsfd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbXVtdm9rcG5ueGtza2p0c2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MDAzOTAsImV4cCI6MjAwNzE3NjM5MH0.D_lXHlPDUye7fFlf2plvo7CWpAteK-Q8fZ_E5puvEGQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
