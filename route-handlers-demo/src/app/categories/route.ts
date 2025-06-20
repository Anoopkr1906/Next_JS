export const dynamic = "force-static"; // This ensures that the route is statically generated at build time.

export async function GET() {
    // This data would typically come from a database or an external API.

    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
        { id: 3, name: 'Clothing' },
        { id: 4, name: 'Home & Kitchen' },
        { id: 5, name: 'Sports & Outdoors' },
    ];

    return Response.json(categories)
}

