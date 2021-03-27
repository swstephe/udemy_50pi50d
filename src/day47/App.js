import { useState } from 'react'
import { useInterval } from '../utils'
import Testimonial from './Testimonial'
import testimonials from './testimonials.json'

function App() {
  const [idx, setIdx] = useState(0)

  useInterval(() => {
    setIdx(idx === testimonials.length - 1 ? 0 : idx + 1)
  }, 10000)

  return <Testimonial current={testimonials[idx]}/>
}

export default App
