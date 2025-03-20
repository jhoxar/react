import { useState , useEffect } from "react"

const CounterEffect = ()=>{

    //Actualizar UI, leer informacion
    const [count, setCount] = useState(0)

    //Si se quiere ejecutar el efecto solo una vez se le pasa un [] vacio.
    //Si no se le pasa un segundo argumento a useState entonces, se ejecutara en cada renderizado
    //Aca UseEffect se ejecuta cada vez que la variable count cambia , que es cuando se le da click 

    useEffect(()=>{
        console.log(`Counting: ${count}`)
    }, [count])

    return (
        <>
        <button onClick={()=> {setCount(count + 1)}}>Next</button>
        <p>your current count: {count}</p>
        </>
    )

}

export default CounterEffect