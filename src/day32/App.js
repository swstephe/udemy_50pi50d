function App() {
  return (
    <>
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input type="checkbox" id="good" className="toggle"/>
          <label htmlFor="good" className="label">
            <div className="ball"/>
          </label>
          <span>Good</span>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="cheap" className="toggle"/>
          <label htmlFor="cheap" className="label">
            <div className="ball"/>
          </label>
          <span>Cheap</span>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="fast" className="toggle"/>
          <label htmlFor="fast" className="label">
            <div className="ball"/>
          </label>
          <span>Fast</span>
      </div>
    </>
  )
}

export default App
