import { useState } from 'react'
import { useInterval } from '../utils'

function App() {
  const [load, setLoad] = useState(0)

  useInterval(
    () => setLoad(load + 1),
    load > 99 ? null : 30
  )

  return (
    <>
      <section
        className="bg"
        style={{filter: `blur(${(-30*load) / 100 + 30}px`}}
      />
      <div
        className="loading-text"
        style={{opacity: -load / 100 + 1}}
      >{load}%</div>
    </>
  )
}

export default App
