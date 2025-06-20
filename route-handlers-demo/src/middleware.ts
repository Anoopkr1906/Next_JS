import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


// METHOD 1:- custom matcher config

// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: "/profile",
// };


// METHOD 2:- conditional statements

export function middleware(request: NextRequest) {

    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");

    if(!themePreference){
        response.cookies.set("theme" , "dark");
    }

    response.headers.set("custom-headers" , "custom-value")


    return response;

    // const { pathname } = request.nextUrl;
    // Redirect to hello page if the user is trying to access the profile page
    // if (pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/hello", request.url));
    // }

    // Redirect to hello page if the user is trying to access the profile page but url does not changes if we use rewrite in place of redirect
    // if (pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/hello", request.nextUrl));
    // }

    // Allow other requests to proceed
    return NextResponse.next();
}