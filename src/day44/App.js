import { useState } from 'react'
import RangeSlider from './RangeSlider'

function App() {
  const [value, setValue] = useState(50)

  return (
    <>
      <h2>Custom Range Slider</h2>
      <RangeSlider min={0} max={100} value={value} setValue={setValue}/>
    </>
  )
}

export default App
