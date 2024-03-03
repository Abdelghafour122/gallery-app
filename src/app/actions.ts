"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { permanentRedirect } from "next/navigation";
import { LogInFormType } from "@/utils/types";

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

export async function login({ email, password }: LogInFormType) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (!error) {
    permanentRedirect("/home");
  } else {
    console.log(error);
    return error.message;
  }
}
