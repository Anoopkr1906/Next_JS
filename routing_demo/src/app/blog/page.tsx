import { Metadata } from "next"
import Link from "next/link"

export const metadata : Metadata = {
    title: "Blog",
};

export default function blog(){
    return (
        <>
            <h1>Welcome To the Blog Page</h1>
            <Link href="/">Home</Link>
        </>
    )
}