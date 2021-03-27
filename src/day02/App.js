import classNames from 'classnames'
import { useState } from 'react'
import { range } from '../utils'

const count = 4

function App() {
  const [active, setActive] = useState(0)

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          id="progress"
          style={{width: `${(active / (count - 1)) * 100}%`}}
        />
        {range(1, count).map(i => (
          <div
            key={i}
            className={classNames('circle', {active: active === i})}
          >{i}</div>
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
        disabled={active >= count - 1}
        onClick={() => setActive(active + 1)}
      >Next</button>
    </div>
  )
}

export default App
