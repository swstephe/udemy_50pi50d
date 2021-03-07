function App() {
  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result"/>
        <button className="btn" id="clipboard">
          <i className="far fa-clipboard"/>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label htmlFor="length">Password Length</label>
          <input type="number" id="length" min="4" max="20" value="20"/>
        </div>
        <div className="setting">
          <label htmlFor="uppercase">Include uppercase letters</label>
          <input type="checkbox" id="uppercase" checked/>
        </div>
        <div className="setting">
          <label htmlFor="lowercase">Include lowercase letters</label>
          <input type="checkbox" id="lowercase" checked/>
        </div>
        <div className="setting">
          <label htmlFor="numbers">Include numbers</label>
          <input type="checkbox" id="numbers" checked/>
        </div>
        <div className="setting">
          <label htmlFor="symbols">Include symbols</label>
          <input type="checkbox" id="symbols" checked/>
        </div>
      </div>
      <button className="btn btn-large" id="generate">
        Generate Password
      </button>
    </div>
  )
}

export default App
