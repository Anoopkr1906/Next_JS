export const dynamic = "force-static"; // this caches the response at build time

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
}