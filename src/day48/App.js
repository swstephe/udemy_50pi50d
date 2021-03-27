import { range } from '../utils'

const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10
const getRandomNr = () => Math.floor(Math.random()*10) + 300
const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`


function App() {
  return (
    <>
      <h1 className="title">Random Image Feed</h1>
      <div className="container">
        {range(rows*3).map(i => (
          <img key={i} src={`${unsplashURL}${getRandomSize()}`} alt=""/>
        ))}
      </div>
    </>
  )
}

export default App
