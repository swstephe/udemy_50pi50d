import classNames from 'classnames'
import { useState } from 'react'
import { range } from '../utils'

import Num from './Num'

function App() {
  const count = 4
  const initial = range(count).map(n => n === 0 ? 'in' : '')
  const [nums, setNums] = useState(initial)
  const [final, setFinal] = useState(false)

  function endAnimation(e, idx) {
    const newNums = [...nums]
    if (e.animationName === 'goIn' && idx !== count - 1) {
      newNums[idx] = 'out'
      setNums(newNums)
    } else if (e.animationName === 'goOut' && idx < count - 1) {
      newNums[idx + 1] = 'in'
      setNums(newNums)
    } else {
      setFinal(true)
    }
  }

  return (
    <>
      <div className={classNames('counter', {hide: final})}>
        <div className="nums">
          {nums.map((state, idx) => (
            <Num
              key={idx}
              state={state}
              onAnimationEnd={e => endAnimation(e, idx)}
            >{count - idx - 1}</Num>
          ))}
        </div>
        <h4>Get Ready</h4>
      </div>
      <div className={classNames('final', {show: final})}>
        <h1>Go</h1>
        <button id="replay"
                onClick={() => {
                  setFinal(false)
                  setNums(initial)
                }}
        >Replay</button>
      </div>
    </>
  )
}
export default App
