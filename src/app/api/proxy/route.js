
// GET /api/proxy?url=https://target-file.glb

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new Response("Missing URL", { status: 400 });
  }

  try {
    const res = await fetch(targetUrl);
    const contentType = res.headers.get("content-type") || "application/octet-stream";
    const body = await res.arrayBuffer();

    return new Response(body, {
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600"
      },
    });
  } catch (err) {
    return new Response("Failed to fetch file: " + err.message, { status: 500 });
  }
}
