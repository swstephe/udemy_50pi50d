import { range } from '../utils'
import Square from './Square'

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

function App() {
  const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)]

  return (
    <div id="container" className="container">
      {range(SQUARES).map(idx => (
        <Square key={idx} getRandomColor={getRandomColor}/>
      ))}
    </div>
  )
}

export default App
