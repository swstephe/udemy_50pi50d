import { useState } from 'react'
import { range } from '../utils'
import Empty from './Empty'

function App() {
  const [filled, setFilled] = useState(0)

  return (
    <>
      {range(5).map(idx => (
        <Empty
          key={idx}
          filled={idx === filled}
          onFill={() => setFilled(idx)}
          onEmpty={() => setFilled(-1)}
        />
      ))}
    </>
  )
}

export default App
