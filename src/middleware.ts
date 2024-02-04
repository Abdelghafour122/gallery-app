import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

const UNLOGGED_ROUTES = ["/", "/login", "/signup"];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res: response });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (
    !session &&
    request.nextUrl.pathname !== "/" &&
    !UNLOGGED_ROUTES.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (session && UNLOGGED_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  return response;
}

export const config = {
  matcher: ["/", "/login", "/signup", "/home/:path*"],
};
