//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'


function App() {

  const items = ['Java', 'Python', 'Css']

  
  

  return (
   <section>
    <h1>Hello here is my first react app</h1>
    < Card  title = "Mobile apps" description = "The best apps to follow"/>
    <Card title = "Linux" description = "Linux is versatil"/>
    <ul>
      {
        items.map((item, index) => {
          return <li key={index}> {item} </li>
        })
      }
    </ul>
   </section>
  )
}

export default App
