import { useRef, useState } from 'react'
import slides from './slides.json'

function App() {
  const [active, setActive] = useState(0)
  const ref = useRef()

  const onUp = () => setActive(active < slides.length - 1 ? active + 1 : 0)
  const onDown = () => setActive(active > 0 ? active - 1 : slides.length - 1)

  return (
    <div className="slider-container" ref={ref}>
      <div
        className="left-slide"
        style={{
          top: `-${(slides.length - 1)*100}vh`,
          transform: ref.current && `translateY(${active*ref.current.clientHeight}px)`
        }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} style={{backgroundColor: slide.color}}>
            <h1>{slide.header}</h1>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
      <div
        className="right-slide"
        style={{
          transform: ref.current && `translateY(-${active*ref.current.clientHeight}px)`
        }}
      >
        {slides.slice(0).reverse().map((slide, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url('${slide.img}')`
            }}/>
        ))}
      </div>
      <div className="action-buttons">
        <button className="down-button" onClick={onDown}>
          <i className="fas fa-arrow-down"/>
        </button>
        <button className="up-button" onClick={onUp}>
          <i className="fas fa-arrow-up"/>
        </button>
      </div>
    </div>

  )
}

export default App
