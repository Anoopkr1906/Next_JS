import Link from "next/link";

export default function InnerF2(){
    return (
        <>
            <h1>Inner Folder2 page</h1>
            <div>
                <Link href={"/f5"}>Folder5</Link>
            </div>
        </>
    )
}