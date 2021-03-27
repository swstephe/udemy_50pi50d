import { useEffect, useRef, useState } from 'react'
import images from './images.json'

let interval = null

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handler = () => savedCallback.current()
    if (delay !== null) {
      interval = setInterval(handler, delay)
      return () => clearInterval(interval)
    }
  })
}

function App() {
  const delay = 2000
  const [idx, setIdx] = useState(0)
  const run = () => changeImage(idx + 1)

  useInterval(() => {
    changeImage(idx + 1)
  }, delay)

  function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, delay)
  }

  function changeImage(newIdx) {
    if (newIdx > images.length - 1) {
      newIdx = 0
    } else if (idx < 0) {
      newIdx = images.length - 1
    }
    setIdx(newIdx)
  }

  return (
    <div className="carousel">
      <div className="image-container" id="imgs"
           style={{transform: `translateX(${-500*idx}px)`}}>
        {images.map((image, idx) => (
          <img key={idx} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="buttons-container">
        <button id="left" className="btn"
                onClick={() => {
                  resetInterval()
                  changeImage(idx - 1)
                }}>Prev</button>
        <button id="right" className="btn"
                onClick={() => {
                  resetInterval()
                  changeImage(idx + 1)
                }}>Next</button>
      </div>
    </div>
  )
}

export default App
