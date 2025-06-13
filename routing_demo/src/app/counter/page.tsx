import { Counter } from "./counter";

// this will give error as metadata is not supported in client components 
// The solution is that we use the metadata in server components and extract any client side functinality 
// into seperate components 


export const metadata = {
    title: "Counter Page",
}

export default function CounterPage() {

    return (
        <Counter />
    );
}