import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  await supabase.auth.signOut();

  return NextResponse.redirect(new URL("/login", request.nextUrl), {
    status: 308,
  });
}
