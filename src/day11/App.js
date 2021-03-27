import { useState } from 'react'
import { useKeyDown } from '../utils'

function App() {
  const [key, setKey] = useState()
  const [keyCode, setKeyCode] = useState()
  const [code, setCode] = useState()

  useKeyDown((event) => {
    setKey(event.key === ' ' ? 'Space' : event.key)
    setKeyCode(event.keyCode)
    setCode(event.code)
  })

  return (
    <div id="insert">{
      key ? (
        <>
          <div className="key">
            {key}
            <small>event.key</small>
          </div>
          <div className="key">
            {keyCode}
            <small>event.keyCode</small>
          </div>
          <div className="key">
            {code}
            <small>event.code</small>
          </div>
        </>
      ) : (
        <div className="key">
          Press any key to get keyCode
        </div>
      )
    }
    </div>
  )
}
export default App
