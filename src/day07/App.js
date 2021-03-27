import classNames from 'classnames'
import { useState } from 'react'

function App() {
  const [state, setState] = useState(0)
  // CSS variables not supported in React!
  const hoverWidth = '75%'
  const otherWidth = '25%'

  return (
    <div className="container">
      <div className={classNames('split', 'left', {'hover-left': state&1})}
           onMouseEnter={() => setState(1)}
           onMouseLeave={() => setState(0)}
           style={{
             backgroundImage: 'url("/ps.jpg")',
             width: ['', hoverWidth, otherWidth][state]
           }}
      >
        <h1>Playstation 5</h1>
        <a href="." className="btn">Buy Now</a>
      </div>
      <div className={classNames('split', 'right', {'hover-right': state&2})}
           onMouseEnter={() => setState(2)}
           onMouseLeave={() => setState(0)}
           style={{
             backgroundImage: 'url("/xbox.jpg")',
             width: ['', otherWidth, hoverWidth][state]
           }}
      >
        <h1>XBox Series X</h1>
        <a href="." className="btn">Buy Now</a>
      </div>
    </div>
  )
}

export default App
