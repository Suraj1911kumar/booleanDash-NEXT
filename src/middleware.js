import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  const verify = request.cookies.get("Token");
  const user = request.cookies.get("UserType");
  console.log(verify);
  if (!verify) {
    if (request.nextUrl.pathname != "/auth") {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }
}

export const config = {
  matcher: ["/users/HR/Dashboard"],
};
