// pages/api/example.js
import { NextResponse } from "next/server"
export async function GET(request,response){
    return NextResponse.json({message:"Hi"})
}

