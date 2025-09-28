import { NextResponse } from 'next/server';
export const runtime = 'nodejs'; // ✅ force Node.js runtime
export async function POST(req: Request) {
  try {
    const body = await req.json(); // { username, password }

    console.log('[LOGIN] Sending to external API:', body);

    const response = await fetch(
      'https://api.virtualinteriordesign.click/api/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text(); // raw text
    console.log('[LOGIN] External API status:', response.status, 'body:', text);

    if (!response.ok) {
      return NextResponse.json(
        { message: text || 'External API error' },
        { status: response.status }
      );
    }

    const data = JSON.parse(text); // success response
    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[LOGIN] Proxy error:', message);
    return NextResponse.json(
      { message: 'Server unavailable, please try again shortly.' },
      { status: 500 }
    );
  }
}
