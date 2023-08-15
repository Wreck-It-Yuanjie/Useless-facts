import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://exnnxsrnztvtihzkdlkq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bm54c3JuenR2dGloemtkbGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NjI3NTMsImV4cCI6MjAwNzEzODc1M30.VlJllHSa0huQ5nHoS5gd0CIZiAjiYB0MVz49z_ZElGU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
