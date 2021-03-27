import { useState } from 'react'

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'


function App() {
  const [selected, setSelected] = useState(null)
  const [screen, setScreen] = useState(0)

  return (
    <>
      <Screen1
        show={screen === 0}
        setScreen={setScreen}
      />
      <Screen2
        show={screen > 1}
        setScreen={setScreen}
        setSelected={setSelected}
      />
      <Screen3
        selected={selected}
        started={screen === 2}
      />
    </>
  )
}

export default App
