import classNames from 'classnames'
import { useState } from 'react'
import { useFocus } from '../utils'


function App() {
  const [ active, setActive ] = useState(false)
  const [ inputRef, setInputFocus ] = useFocus()

  const handleClick = () => {
    setActive(!active)
    setInputFocus(inputRef)
  }

  return (
    <div className={classNames('search', {active})}>
      <input ref={inputRef} type="text" className="input" placeholder="Search..."/>
      <button className="btn" onClick={handleClick}><i className="fas fa-search" /></button>
    </div>
  )
}

export default App
