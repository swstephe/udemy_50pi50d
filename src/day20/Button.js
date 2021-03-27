import { useState } from 'react'

import Ripple from './Ripple'

function Button() {
  const [ripples, setRipples] = useState([])

  function handleClick(e) {
    setRipples([...ripples, e])
    setTimeout(
      () => setRipples(ripples.filter(ripple => (ripple !== e))),
      500
    )
  }

  return (
    <button className="ripple" onClick={handleClick}>
      Click Me
      {ripples.map((e, idx) => <Ripple key={idx} e={e}/>)}
    </button>
  )
}

export default Button
