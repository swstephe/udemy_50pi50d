import classNames from 'classnames'
import { useState } from 'react'
import tabs from './tabs.json'

function App() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="phone">
      {tabs.map((tab, idx) => (
        <img
          key={idx}
          src={tab.img}
          alt={tab.alt}
          className={classNames('content', {show: current === idx})}
        />
      ))}
      <nav>
        <ul>
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              className={classNames({active: current === idx})}
              onClick={() => setCurrent(idx)}
            >
              <i className={tab.icon} />
              <p>{tab.label}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default App
