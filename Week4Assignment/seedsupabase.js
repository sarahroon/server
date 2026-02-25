import { supabase } from "./supabaseclient/supabaseClient.js";

async function seedAll() {
  const { data: namesData, error: namesError } = await supabase
    .from("names")
    .insert([
      { username: "ben_b", name: "Benjamin" },
      { username: "charles_j", name: "Charles" },
      { username: "abi_w", name: "Abigail" },
    ]);
  if (namesError) console.error("Names Seed Error:", namesError);
  else console.log("Seeded Names:", namesData);

  const { data: emailsData, error: emailsError } = await supabase
    .from("emails")
    .insert([
      { username: "ben_b", email: "ben.b@example.com" },
      { username: "charles_j", email: "charles.j@example.com" },
      { username: "abi_w", email: "abi.w@example.com" },
    ]);
  if (emailsError) console.error("Emails Seed Error:", emailsError);
  else console.log("Seeded Emails:", emailsData);

  const { data: agesData, error: agesError } = await supabase
    .from("ages")
    .insert([
      { username: "ben_b", age: 25 },
      { username: "charles_j", age: 29 },
      { username: "abi_w", age: 28 },
    ]);
  if (agesError) console.error("Ages Seed Error:", agesError);
  else console.log("Seeded Ages:", agesData);
}

seedAll();
