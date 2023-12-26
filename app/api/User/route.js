const { default: User } = require("@/app/(models)/User");
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return NextResponse(
        { message: "All Fields Are Required" },
        { status: 400 }
      );
    }

    const duplicate = await User.findOne({email:email}).lean().exec()

    if(duplicate){
        return NextResponse(
            { message: "User with email id already present" },
            { status: 409 }
          );
    }

    const hashPassword = await bcrypt.hash(password,10)
    await User.create({name,email,hashPassword})

    return NextResponse(
        {message:"User Created"},
        {status:201}
        )
  } catch (error) {
    console.log("===============================")
    console.log(err);
    return NextResponse({ message: "Internal Server Error" }, { status: 500 });
  }
}
