import { notFound } from "next/navigation";


export default async function ReviewDetails({params} : {
    params: Promise<{productId: string, reviewId: string}>
}){
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;

    if(parseInt(reviewId) > 1000){
        notFound() ; // If reviewId is greater than 1000, show 404 page
    }
    return (
        <h1>Review {reviewId} for Product: {productId}</h1>
    )
}