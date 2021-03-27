import { useState } from 'react'

import { range } from '../utils'

import BigCup from './BigCup'
import SmallCup from './SmallCup'

function App() {
  const totalCups = 8
  const [cups, setCups] = useState(0)

  return (
    <>
      <h1>Drink Water</h1>
      <h3>Goal 2 Liters</h3>

      <BigCup cups={cups} totalCups={totalCups}/>

      <p className="text">Select how many glasses of water that you have drank</p>
      <div className="cups">{range(totalCups).map(idx =>
        <SmallCup
          key={idx}
          full={idx < cups}
          onClick={() => setCups(idx < cups ? idx : idx + 1)}
        />
      )}</div>
    </>
  )
}

export default App
