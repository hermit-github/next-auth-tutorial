import {withAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {

        if(
            req.nextUrl.pathname.startsWith("/AssignRole") &&
            req.nextauth.token.role != "admin"
        ) {
            return NextResponse.rewrite( new URL("/Denied",req.url))
        }
        console.log(req)
    },
    {callbacks:{
        authorized: ({token}) => !!token
    }}
)

export const config = {
    matcher:[
        "/AssignRoles"
    ]
} 