import { CoreConcepts } from "./CoreConcepts"
import { CORE_CONCEPTS } from "../data"

export function CoreConcept(){

    return (
        <section id='core-concepts'>
        <h2>Core concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((conceptItem)=> <CoreConcepts key = {conceptItem.title} {...conceptItem}></CoreConcepts> )}
          </ul>
        </section>
    )

}