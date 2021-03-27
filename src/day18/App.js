import { useEffect, useState } from 'react'

import Slide from './Slide'

import slides from './slides.json'

function App() {
  const [ active, setActive ] = useState(0)
  const goLeft = () => setActive(active <= 0 ? slides.length - 1 : active - 1)
  const goRight = () => setActive(active >= slides.length - 1 ? 0 : active + 1)

  useEffect(() => {
    document.body.style.backgroundImage = `url('${slides[active]}')`
  }, [active])

  return (
    <div className="slider-container">
      {slides.map((slide, idx) =>
        <Slide key={idx} active={active === idx} slide={slide}/>
      )}
      <button
        className="arrow left-arrow"
        id="left"
        onClick={goLeft}
      >
        <i className="fas fa-arrow-left"/>
      </button>
      <button
        className="arrow right-arrow"
        id="right"
        onClick={goRight}
      >
        <i className="fas fa-arrow-right"/>
      </button>
    </div>
  )
}

export default App
