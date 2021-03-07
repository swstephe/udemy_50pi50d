import images from "./images.json"
import { useState } from 'react'

import Panel from './Panel'

function App() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="container">
      {images.map((image, idx) => (
        <Panel
          key={idx}
          image={image}
          active={idx === current}
          onClick={() => setCurrent(idx)}
        />
      ))}
    </div>
  )
}

export default App
