import { useState } from 'react'
import Hearts from './Hearts'

function App() {
  const [clickTime, setClickTime] = useState(0)
  const [count, setCount] = useState(0)
  const [hearts, setHearts] = useState([])

  function onClick({nativeEvent}) {
    if (clickTime === 0) {
      setClickTime(new Date().getTime())
    } else {
      const newTime = new Date().getTime()
      if (newTime - clickTime < 800) {
        setCount(count + 1)
        setHearts([...hearts, nativeEvent])
        setClickTime(0)
      } else {
        setClickTime(newTime)
      }
    }
  }

  return (
    <>
      <h3>Double click on the image to <i className="fas fa-heart"/> it.</h3>
      <small>You liked it <span id="times">{count}</span> times</small>
      <Hearts
        hearts={hearts}
        setHearts={setHearts}
        delay={1000}
        onClick={onClick}
      />
    </>
  )
}

export default App
