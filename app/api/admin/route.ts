import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

interface AdminRequestBody {
  password: string;
}

export async function POST(request: Request) {
  const body: AdminRequestBody = await request.json();
  const { password } = body;

  if (password === ADMIN_PASSWORD) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
