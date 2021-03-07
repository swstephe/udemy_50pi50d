function App() {
  return (
    <div className="container">
      <h3>Enter all of the choices divided by a comma (',').
      <br/> Press Enter when you're done</h3>
      <textarea id="textarea" placeholder="Enter choices here..." />
      <div id="tags">
        <span className="tag">Choice 1</span>
        <span className="tag highlight">Choice 2</span>
        <span className="tag">Choice 3</span>
      </div>
    </div>
  )
}

export default App
