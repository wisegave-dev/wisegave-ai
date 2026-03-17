import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (path === "/checkout") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (path === "/checkout/success") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/checkout/:path*"],
};
