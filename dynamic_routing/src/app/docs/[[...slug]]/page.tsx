export default async function Docs({params} :{
    params : Promise<{slug : String[]}>
}){
    // params is a promise that resolves to an object with a slug property
    // that is an array of strings representing the dynamic segments of the URL

    const {slug} = await params;
    if(slug?.length == 2 ){
        return (
            <h1>Docs page for feature {slug[0]} and concept {slug[1]}</h1>
        );
    }
    else if(slug?.length == 1){
        return (
            <h1>Docs page for feature {slug[0]}</h1>
        );
    }
    return (
        <h1>Docs Home page</h1>
    )
}