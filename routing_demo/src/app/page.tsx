import Link from "next/link"

export default function Home(){
    return (
        <>
            <h1>Welcome to world of Routing in Next.js || Welcome Home</h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/products">Products</Link>

        </>
    )
}