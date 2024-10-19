import { useState } from 'react'

import './App.css'
import ChildrenAsProps from './ChildrenAsProps'
import FunctionAsProps from './FunctionAsProps'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  const handleDecrease = () => {
    setCount(count - 1);
  }

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

      {/* passing function as props */}
      <FunctionAsProps handleIncrease={handleIncrease} handleDecrease={handleDecrease}>
        <h1>{count}</h1>
      </FunctionAsProps>
    </>
  )
}

export default App
