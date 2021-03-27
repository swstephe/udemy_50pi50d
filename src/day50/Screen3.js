import classNames from 'classnames'
import { useState } from 'react'
import { useInterval, useTimeout } from '../utils'

function Screen3({selected, started}) {
  const [score, setScore] = useState(0)
  const [bugs, setBugs] = useState([])
  const [message, setMessage] = useState(false)
  const [seconds, setSeconds] = useState(0)

  const pad = (n) => n.toString().padStart(2, '0')

  function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    return {
      x: Math.random()*(width - 200) + 100,
      y: Math.random()*(height - 200) + 100,
      rot: Math.random() * 360,
      caught: false
    }
  }

  function createInsect() {
    setBugs(bugs => [...bugs, getRandomLocation()])
  }

  function removeInsect(idx) {
    setBugs(bugs => [...bugs.slice(0, idx), ...bugs.slice(idx + 1)])
  }

  function catchInsect(idx) {
    setScore(score + 1)
    if (score > 19) {
      setMessage(true)
    }
    const newBugs = [...bugs]
    newBugs[idx] = {...newBugs[idx], caught: true}
    setBugs(newBugs)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(() => removeInsect(idx), 2000)
  }

  useTimeout(createInsect, 1000)

  useInterval(
    () => {
      if (started) {
        setSeconds(seconds + 1)
      }
    },
    1000
  )

  return (
    <div className="screen game-container" id="game-container">
      <h3 id="time" className="time">Time: {
        pad(Math.floor(seconds/ 60))
      }:{
        pad(seconds % 60)
      }</h3>
      <h3 id="score" className="score">Score: {score}</h3>
      <h5 id="message" className={classNames('message', {visible: message})}>
        Are you annoyed yet?<br />
        You are playing an impossible game!!
      </h5>
      {bugs.map((bug, idx) => (
        <img
          className={classNames('insect', {caught: bug.caught})}
          key={idx}
          src={selected && selected.img}
          alt={selected && selected.label.toLowerCase()}
          style={{
            left: `${bug.x}px`,
            top: `${bug.y}px`,
            transform: `rotate(${bug.rot}deg)`
          }}
          onClick={() => catchInsect(idx)}
        />
      ))}
    </div>
  )
}

export default Screen3
