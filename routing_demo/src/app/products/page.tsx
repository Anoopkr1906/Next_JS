import Link from "next/link"

export default function Products(){
    return (
        <>
            <h1>Welcome To the Products Page</h1>
            <h2><Link href="/products/1">Product1</Link></h2>
            <h2><Link href="/products/2">Product2</Link></h2>
            <h2><Link href="/products/3">Product3</Link></h2>
            <Link href="/">Home</Link>
        </>
    )
}