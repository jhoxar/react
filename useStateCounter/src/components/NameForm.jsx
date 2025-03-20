import { useState } from "react"
const NameForm = ()=>{
    const [name, setName] = useState('')

    return (
        <>
        <input type="text"
        placeholder="Please type your name here"
        name={name}
        onChange={(e) => setName(e.target.value)}
        />

        <p>{`Hello, ${name || 'visitante'}`}</p>
        </>
    )

}

export default NameForm