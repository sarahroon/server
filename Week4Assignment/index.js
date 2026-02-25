import { supabase } from "./supabaseclient/supabaseClient.js";

async function testSupabase() {
  const { data, error } = await supabase.from("names").select("*");

  if (error) console.error("Error:", error);
  else console.log("Supabase connected! Data:", data);
}

testSupabase();
