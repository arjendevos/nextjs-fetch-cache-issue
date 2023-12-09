import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source:
        "/((?!api|_next/static|_next/image|assets|favicon.ico|favicon.jpeg).*)",
      missing: [
        // Disable running on prefetching
        // { type: "header", key: "next-router-prefetch" },
        // { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
