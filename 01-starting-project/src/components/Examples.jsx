import { TabButton } from "./TabButton"
import { EXAMPLES } from "../data"
import { useState } from "react"
import { Section } from "./Section"
import { Tabs } from "./Tabs"


export function Examples(){

      const [currentContent, setcurrentContent] = useState('')
    
      function handleClick(buttonSelected){
        //console.log(buttonSelected)
        setcurrentContent(buttonSelected)
      }

      let tabContent;

      if(!currentContent){
        tabContent = <p>Please select an option</p>
      } else{
        tabContent =  
        <div id='tab-content'> 
            <h3>{EXAMPLES[currentContent].title}</h3>
            <p>{EXAMPLES[currentContent].description}</p>
            <pre>
                <code>{EXAMPLES[currentContent].code}</code>
            </pre>
      </div>

      }



    return (
        <Section id='examples' title= 'Examples'>

            <Tabs 
            buttons = {
            <>
                <TabButton 
                isSelected={currentContent == 'components'}
                onClick={()=> handleClick('components')} 
                >
                Components
                </TabButton>


                <TabButton 
                isSelected={currentContent == 'jsx'} 
                onClick={()=> handleClick('jsx')}
                >
                JSX
                </TabButton>

                <TabButton 
                isSelected={currentContent == 'props'} 
                onClick={()=> handleClick('props')}
                >
                Props
                </TabButton>

                <TabButton 
                isSelected={currentContent == 'state'} 
                onClick={()=> handleClick('state')}
                >
                State
                </TabButton>
            </>
            }>
                {tabContent}
            </Tabs>
    
        </Section>
    )
}