import { useState, useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState("// Joke goes here")

  async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    setJoke(data.joke)
  }

  useEffect(() => {
    generateJoke()
  }, [])

  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" className="joke">{joke}</div>
      <button id="jokeBtn" className="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  )
}

export default App
