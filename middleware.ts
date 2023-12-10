import { NextRequest, NextResponse } from "next/server";
import { tmdbService } from "./app/(web)/movies/lib/tmdb.db";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const tmdbResponse = tmdbService.getMiddleware(req);
  if (tmdbResponse)
    return tmdbResponse;
  
  return NextResponse.next();
}