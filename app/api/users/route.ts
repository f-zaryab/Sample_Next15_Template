import { NextResponse } from "next/server";

const users = ['user-1', 'user-2', 'user-3'];

export async function GET() {
  return NextResponse.json({ data: users });
}