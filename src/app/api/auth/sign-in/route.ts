import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type requestBody = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const userData: requestBody = await request.json();

  const { email, password } = userData;

  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new NextResponse(error.message, { status: 500 });
  }

  return new NextResponse("Logged in successfully!", { status: 200 });
}
