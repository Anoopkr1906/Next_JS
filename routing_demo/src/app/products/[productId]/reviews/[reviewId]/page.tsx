import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}


export default async function ReviewDetails({params} : {
    params: Promise<{productId: string, reviewId: string}>
}){
    const random = getRandomInt(2); // this will randomly return 0 or 1
    // Simulating a random error
    // In a real-world scenario, this could be an API call that might fail
    if(random === 1){
        throw new Error("Error Loading")
    }


    
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;

    if(parseInt(reviewId) > 1000){
        notFound() ; // If reviewId is greater than 1000, show 404 page
    }
    return (
        <h1>Review {reviewId} for Product: {productId}</h1>
    )
}