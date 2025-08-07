import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("loginToken")?.value;
  const url = "http://localhost:3000";

  if (token) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/login/:path*"],
};
