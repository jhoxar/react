//ESTO ES UN COMPONENTE EN REACT
//It's just a javascript function, it follows the funcion name
//I will use and build docens and hundreds of components

//Creating mu first component

//import componentsImg from './assets/components.png'
import { Examples } from './components/Examples.jsx';
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept.jsx';


function App() {


  return (

    <>
      <Header/>
      
      <main>

        <CoreConcept/>
        <Examples/>
        

      </main>
    </>
    
      
    
  );
}

export default App;
