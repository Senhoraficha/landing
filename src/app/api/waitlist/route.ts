import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  // TODO: persist to Supabase — connect table `waitlist` (email, created_at, source)
  console.log("[waitlist]", email, new Date().toISOString());

  return NextResponse.json({ ok: true });
}
