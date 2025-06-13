import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: String}> ;
}

export const generateMetadata = async ({params} : Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);
        },100)
    }) ;
    return {
        title: `Product ${title} Details`,
    }
}

export default async function ProductDetails({params} : Props) {
    const productId = (await params).productId;
    return (
        <h1>Details about product {productId}</h1>
    )
}