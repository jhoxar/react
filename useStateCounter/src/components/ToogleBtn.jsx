import { useState } from "react";

export function ToogleBtn(){
    const [isActive, setIsactive] = useState(false)


    return(
        <>
        <button onClick={() => setIsactive(!isActive)}>
            {isActive ? 'Active':'Inactive'}
        </button>
        </>
    )

}