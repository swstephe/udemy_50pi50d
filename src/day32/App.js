import { useState } from 'react'

function App() {
  const keys = ['good', 'cheap', 'fast']
  const [flags, setFlags] = useState(
    Object.fromEntries(keys.map(key => [key, false])))

  function toggle(e, key) {
    const newFlags = {...flags, [key]: e.target.checked }
    if (Object.values(newFlags).filter(x => x).length === 3) {
      newFlags[{good: 'fast', cheap: 'good', fast: 'cheap'}[key]] = false
    }
    setFlags(newFlags)
  }

  return (
    <>
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input type="checkbox" id="good" className="toggle"
               checked={flags.good}
               onChange={e => toggle(e, 'good')}/>
          <label htmlFor="good" className="label">
            <div className="ball"/>
          </label>
          <span>Good</span>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="cheap" className="toggle"
               checked={flags.cheap}
               onChange={e => toggle(e, 'cheap')}/>
          <label htmlFor="cheap" className="label">
            <div className="ball"/>
          </label>
          <span>Cheap</span>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="fast" className="toggle"
               checked={flags.fast}
               onChange={e => toggle(e, 'fast')}/>
          <label htmlFor="fast" className="label">
            <div className="ball"/>
          </label>
          <span>Fast</span>
      </div>
    </>
  )
}

export default App
