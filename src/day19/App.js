import { useEffect, useRef, useState } from 'react'
import { useInterval } from '../utils'

import Hand from './Hand'

const language = 'default'

function App() {
  const [time, setTime] = useState(new Date())
  const [is_dark, setDark] = useState(false)
  const buttonRef = useRef()

  useEffect(() => {
    document.documentElement.classList[is_dark ? 'add' : 'remove']('dark')
    buttonRef.current.innerHTML = [is_dark ? 'Light' : 'Dark', 'mode'].join(' ')
  }, [is_dark])

  useInterval(
    () => setTime(new Date()),
    1000
  )

  return (
    <>
      <button
        className="toggle"
        ref={buttonRef}
        onClick={() => setDark(!is_dark)}
       />
      <div className="clock-container">
        <div className="clock">
          <Hand unit={time.getHours()} total={12} className="hour"/>
          <Hand unit={time.getMinutes()} total={60} className="minute"/>
          <Hand unit={time.getSeconds()} total={60} className="second"/>
          <div className="center-point"/>
        </div>
        <div className="time">
          {time.toLocaleString(language, {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        <div className="date">
          {[
            time.toLocaleString(language, {weekday: 'long'}),
            time.toLocaleString(language, {month: 'short'})
          ].join(', ')}
          <span className="circle">
            {time.toLocaleString(language, {day: 'numeric'})}
          </span>
        </div>
      </div>
    </>
  )
}
export default App
