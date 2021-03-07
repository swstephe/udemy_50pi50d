import { useState } from 'react'

const circles = [...Array(4)].map((_, i) => i)

function App() {
  const [active, setActive] = useState(0)

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          id="progress"
          style={{width: `${(active / (circles.length - 1)) * 100}%`}}
        />
        {circles.map(i => (
          <div
            key={i}
            className={`circle ${active === i ? 'active' : ''}`}
          >{i + 1}</div>
        ))}
      </div>
      <button
        className="btn"
        id="prev"
        disabled={active <= 0}
        onClick={() => setActive(active - 1)}
      >Prev</button>
      <button
        className="btn"
        id="next"
        disabled={active >= circles.length - 1}
        onClick={() => setActive(active + 1)}
      >Next</button>
    </div>
  )
}

export default App
