import classNames from 'classnames'
import { useState } from 'react'
import Box from './Box'

const width = 4
const height = 4

function App() {
  const [big, setBig] = useState(false)
  const boxes = []
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      boxes.push(<Box key={boxes.length} x={j*-125} y={i*-125}/>)
    }
  }
  return (
    <>
      <button id="btn" className="magic" onClick={() => setBig(!big)}>
        Magic 🎩
      </button>
      <div id="boxes" className={classNames('boxes', {big})}>
        {boxes}
      </div>
    </>
  )
}

export default App
