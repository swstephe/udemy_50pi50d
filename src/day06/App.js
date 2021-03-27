import { useState } from 'react'
import { range, useScroll } from '../utils'
import Box from './Box'

function App() {
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [triggerBottom, setTriggerBottom] = useState(.8*window.innerHeight)

  useScroll(() => {
    setTriggerBottom(.8*window.innerHeight)
    setScrollY(window.scrollY)
  })

  return (
    <>
      <h1>Scroll to see the animation</h1>
      {range(13).map((key) => (
        <Box key={key} triggerBottom={triggerBottom} scrollY={scrollY}/>
      ))}
    </>
  )
}

export default App
