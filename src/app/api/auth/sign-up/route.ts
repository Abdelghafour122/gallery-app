import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type requestBody = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const requestUrl = new URL(request.nextUrl);

  const userData: requestBody = await request.json();

  const { email, password } = userData;

  const supabase = createRouteHandlerClient({ cookies });

  console.log({ email, password });
  // first check if the user doesn't exist, not in the profiles table but in Auth/users
  // then sign him up

  // supabase.auth.admin.createUser({user_metadata: {}})

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/api/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
    return new NextResponse(
      "Could not authenticate user, something went wrong!",
      { status: 500 }
    );
  }

  return new NextResponse("Check your email to continue sign in process", {
    status: 201,
  });
}
