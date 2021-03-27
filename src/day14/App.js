import classNames from 'classnames'
import { useState } from 'react'
import Toggle from './Toggle'

function App() {
  const [active, setActive] = useState(true)
  const menu = ['Home', 'Works', 'About', 'Contact']

  return (
    <nav id="nav" className={classNames({active})}>
      <ul>
        {menu.map((item, idx) => (
          <li key={idx}><a href="/day14">{item}</a></li>
        ))}
      </ul>
      <Toggle onClick={() => setActive(!active)}/>
    </nav>
  )
}
export default App
