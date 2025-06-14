"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router =  useRouter();
    // Function to handle the click event and redirect to the home page
    const handleClick = () => {
        console.log("Order placed successfully!");
        router.push("/") ;// Redirect to the home page after placing the order
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    )
}