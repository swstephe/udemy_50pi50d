import { useRef, useState } from 'react'

import Canvas from './Canvas'
import ToolBox from './ToolBox'

function App() {
  const [size, setSize] = useState(10)
  const [color, setColor] = useState('#000000')
  const canvasRef = useRef(null)

  return (
    <>
      <Canvas ref={canvasRef} size={size} color={color} />
      <ToolBox
        size={size}
        color={color}
        onColor={setColor}
        onSize={setSize}
        onClear={() => canvasRef.current.clear()}
      />
    </>
  )
}

export default App
