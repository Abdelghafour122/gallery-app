"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { permanentRedirect } from "next/navigation";

const supabase = createServerActionClient({ cookies });

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    permanentRedirect("/");
  } else {
    console.log(error);
    return error.message;
  }
}
