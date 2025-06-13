"use client";
import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2]; // Extract productId from the path
    const reviewId = pathname.split('/')[4]; // Extract reviewId from the path
    return (
        <div>
            <h2>Review {reviewId} not found for Product {productId}</h2>
        </div>
    )
}