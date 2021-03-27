import { useState } from 'react'
import Code from './Code'

function App() {
  const count = 6
  const [codes, setCodes] = useState(new Array(count).fill(''))

  function setCode(idx, code) {
    const newCodes = [...codes]
    newCodes[idx] = code
    setCodes(newCodes)
  }

  return (
    <div className="container">
      <h2>Verify Your Account</h2>
      <p>We emailed you the six digit code to
        cool_guy@email.com <br /> Enter the code below to
        confirm your email address.</p>
      <div className="code-container">
        {codes.map((code, idx) => (
          <Code key={idx} idx={idx} setCode={setCode} />
        ))}
      </div>
      <small className="info">
        This is design only. We didn't actually send
        you an email as we don't have your email,
        right?
      </small>
    </div>
  )
}

export default App
