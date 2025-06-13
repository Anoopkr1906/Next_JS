import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Blog",
};

export default function blog(){
    return (
        <h1>Welcome To the Blog Page</h1>
    )
}