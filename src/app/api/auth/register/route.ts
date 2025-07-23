import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
const usersDB = new Map<
  string,
  { email: string; hashedPassword: string; name: string }
>();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (usersDB.has(email)) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    usersDB.set(email, { name, email, hashedPassword });

    return NextResponse.json({ message: "User registered" });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
