import { useState } from 'react'

const symbols = '!@#$%^&*(){}[]=<>/,.'
const randomFunc = {
  lower: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)),
  upper: () => String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  number: () => String.fromCharCode(48 + Math.floor(Math.random() * 10)),
  symbol: () => symbols[Math.floor(Math.random() * symbols.length)]
}

function App() {
  const [result, setResult] = useState('')
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [number, setNumber] = useState(true)
  const [symbol, setSymbol] = useState(true)
  const [length, setLength] = useState(20)

  function generatePassword() {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    if (typesCount === 0) {
      return ''
    }
    for (let i = 0; i < length; i += typesCount) {
      if (lower) { generatedPassword += randomFunc.lower() }
      if (upper) { generatedPassword += randomFunc.upper() }
      if (number) { generatedPassword += randomFunc.number() }
      if (symbol) { generatedPassword += randomFunc.symbol() }
    }
    return generatedPassword.slice(0, length)
  }

  function copyToClipboard() {
    if (!result) {
      return
    }
    const textarea = document.createElement('textarea')
    textarea.value = result
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
  }

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result">{result}</span>
        <button className="btn" id="clipboard"
          onClick={() => copyToClipboard()}>
          <i className="far fa-clipboard"/>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label htmlFor="length">Password Length</label>
          <input type="number" id="length" min="4" max="20" value={length}
                 onChange={e => setLength(e.target.value)}/>
        </div>
        <div className="setting">
          <label htmlFor="uppercase">Include uppercase letters</label>
          <input type="checkbox" id="uppercase" checked={upper}
                 onChange={e => setUpper(e.target.checked)}/>
        </div>
        <div className="setting">
          <label htmlFor="lowercase">Include lowercase letters</label>
          <input type="checkbox" id="lowercase" checked={lower}
                 onChange={e => setLower(e.target.checked)}/>
        </div>
        <div className="setting">
          <label htmlFor="numbers">Include numbers</label>
          <input type="checkbox" id="numbers" checked={number}
                 onChange={e => setNumber(e.target.checked)}/>
        </div>
        <div className="setting">
          <label htmlFor="symbols">Include symbols</label>
          <input type="checkbox" id="symbols" checked={symbol}
                 onChange={e => setSymbol(e.target.checked)}/>
        </div>
      </div>
      <button className="btn btn-large" id="generate"
        onClick={() => setResult(generatePassword())}>
        Generate Password
      </button>
    </div>
  )
}

export default App
