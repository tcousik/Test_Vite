import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const Name = (props) => {
    return (
      <h1>Person: {props.name}</h1>
    )
  }

  return (
    <div className='App'>
      <Name name={"Hwhat!"} />
    </div>

  )

}

export default App
