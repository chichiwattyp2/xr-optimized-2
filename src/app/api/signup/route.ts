//  import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const fullBody = { ...body, role: 'user' };

//     console.log('[SIGNUP] Sending:', fullBody);

//     const response = await fetch('https://interior-desgin.onrender.com/api/v1/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(fullBody),
//     });

//     const text = await response.text();

//     console.log('[SIGNUP] Status:', response.status);
//     console.log('[SIGNUP] Response:', text);

//     if (!response.ok) {
//       return NextResponse.json(
//         { message: text || 'External API error' },
//         { status: response.status }
//       );
//     }

//     return NextResponse.json(JSON.parse(text), { status: 200 });
//   } catch (error: any) {
//     console.error('[SIGNUP] Unexpected error:', error.message);
//     return NextResponse.json(
//       { message: 'Something went wrong while connecting to the external API.' },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const fullBody = { ...body, role: 'user' };

//     console.log('[SIGNUP] Sending:', fullBody);

//     const response = await fetch('https://interior-desgin.onrender.com/api/v1/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(fullBody),
//     });

//     const text = await response.text();

//     console.log('[SIGNUP] Status:', response.status);
//     console.log('[SIGNUP] Response:', text);

//     if (!response.ok) {
//       return NextResponse.json(
//         { message: text || 'External API error' },
//         { status: response.status }
//       );
//     }

//     return NextResponse.json(JSON.parse(text), { status: 200 });
//   } catch (error: any) {
//     console.error('[SIGNUP] Unexpected error:', error.message);
//     return NextResponse.json(
//       { message: 'Something went wrong while connecting to the external API.' },
//       { status: 500 }
//     );
//   }
// }
// app/api/register/route.ts
// import { NextResponse } from 'next/server';

// export const runtime = 'nodejs'; // ✅ Use Node.js runtime to avoid Edge issues

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const fullBody = { ...body, role: 'user' };

//     console.log('[SIGNUP] Sending:', fullBody);

//     const response = await fetch('https://interior-desgin.onrender.com/api/v1/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(fullBody),
//     });

//     const text = await response.text();

//     console.log('[SIGNUP] Status:', response.status);
//     console.log('[SIGNUP] Response:', text);

//     if (!response.ok) {
//       return NextResponse.json(
//         { message: text || 'External API error' },
//         { status: response.status }
//       );
//     }

//     return NextResponse.json(JSON.parse(text), { status: 200 });
//   } catch (error: any) {
//     console.error('[SIGNUP] Unexpected error:', error.message);
//     return NextResponse.json(
//       { message: 'Something went wrong while connecting to the external API.' },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ✅ Use Node.js runtime to avoid Edge issues

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const fullBody = { ...body, role: 'user' };

    console.log('[SIGNUP] Sending:', fullBody);

    const response = await fetch('https://api.virtualinteriordesign.click/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullBody),
    });

    const text = await response.text();

    console.log('[SIGNUP] Status:', response.status);
    console.log('[SIGNUP] Response:', text);

    if (!response.ok) {
      return NextResponse.json(
        { message: text || 'External API error' },
        { status: response.status }
      );
    }

    return NextResponse.json(JSON.parse(text), { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[SIGNUP] Unexpected error:', message);
    return NextResponse.json(
      { message: 'Something went wrong while connecting to the external API.' },
      { status: 500 }
    );
  }
}
