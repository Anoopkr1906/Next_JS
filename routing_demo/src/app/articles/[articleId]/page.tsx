import Link from "next/link";

export default async function NewsArticle({params , searchParams} :{
    params: Promise<{ articleId : String}>;
    searchParams: Promise<{ lang?: "en" | "hn" | "es"}>
}){
    const {articleId } = await params ;
    const {lang = "en"} = await searchParams ;
    return (
        <>
        <h1>News article {articleId} </h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=hn`}>Hindi</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </div>
        </>
    )
}