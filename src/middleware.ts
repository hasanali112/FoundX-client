import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBaseRoutes;

const roleBaseRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = {
    name: "John Doe",
    role: "",
  };

  // const user = null;

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && roleBaseRoutes[user?.role as Role]) {
    const routes = roleBaseRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/admin"],
};
