import { useState } from "react"
import { createURL } from "../api/createAPI";

export function Home(){
    const [url,setUrl] = useState("");
    const [message,setMessage] = useState("");

    function handleOnChange(e){
        console.log(url)
     setUrl(e.target.value);
    }
    
async function handleOnSubmit(e){
e.preventDefault();

    const result = await createURL(url);
    console.log("hame ",result);
    setMessage(result.message);
}

    return(
        <>
        <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="">Enter Url</label>
            <input type="url" value={url} onChange={handleOnChange} required/>
            <button type="submit">Generate</button>
        </form>
        {message && <h2>{message}</h2>}
        </>
    )
}