import { Metadata } from "next"
import Link from "next/link"

export const metadata : Metadata = {
    title: "Blog",
};

export default async function blog(){
    await new Promise(resolve => {
        setTimeout( () => {resolve("intentional delay")},2000)
    })
    return (
        <>
            <h1>Welcome To the Blog Page</h1>
            <Link href="/">Home</Link>
        </>
    )
}