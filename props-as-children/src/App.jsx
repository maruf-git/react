import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildrenAsProps from './ChildrenAsProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChildrenAsProps>
        {/* children component area starts */}
        <h1>This is title</h1>
        <p>This is desc</p>
        {/* children component area ends */}
      </ChildrenAsProps>

      <ChildrenAsProps children="akhon hi guys print na hoye. ata print hobe">
        {/* hi guys. how are you all. ata comment out korle atai print hobe */} 
        {/* children area priority children attribute er theke beshi */}
      </ChildrenAsProps>
    </>
  )
}

export default App
