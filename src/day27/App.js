import { useState } from 'react'
import Toasts from './Toasts'

const types = ['info', 'success', 'error']
const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

function App() {
  const [toasts, setToasts] = useState([])

  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
  }

  function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
  }

  function onClick() {
    const toast = {
      type: getRandomType(),
      message: getRandomMessage()
    }
    setToasts([...toasts, toast])
  }

  return (
    <>
      <Toasts toasts={toasts} setToasts={setToasts} delay={3000} />
      <button className="btn" id="button" onClick={onClick}>
        Show notification
      </button>
    </>
  )
}

export default App
