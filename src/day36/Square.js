import { useState } from 'react'
const baseColor = '#1d1d1d'

function Square({getRandomColor}) {
  const [color, setColor] = useState(null)

  return (
    <div className="square"
         style={{
           backgroundColor: color ? color : baseColor,
           boxShadow: color ? `0 0 2px ${color}, 0 0 10px ${color}` : `0 0 2px black`
         }}
         onMouseOver={() => setColor(getRandomColor())}
         onMouseOut={() => setColor(null)}
    />
  )
}

export default Square
