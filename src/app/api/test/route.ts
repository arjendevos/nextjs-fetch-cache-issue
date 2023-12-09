import { NextResponse } from "next/server";

let i = 0;

export async function GET(req: Request) {
  const timeStamp = new Date().toISOString();
  i++;
  return NextResponse.json({ time: timeStamp, i });
}
