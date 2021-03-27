import { useState } from 'react'
import { useRecursiveTimeout} from '../utils'

function App() {
  const text = 'We love Programming!'
  const [speed, setSpeed] = useState(300)
  const [idx, setIdx] = useState(1)

  useRecursiveTimeout(() => {
    setIdx(idx < text.length ? idx + 1 : 1)
    return true
  }, speed)

  return (
    <>
      <h1 id="text">{text ? text.slice(0, idx) : "Starting..."}</h1>
      <div>
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          value={speed}
          min="1"
          max="5"
          step="1"
          onInput={e => setSpeed(300 / e.target.value)}
        />
      </div>
    </>
  )
}

export default App
