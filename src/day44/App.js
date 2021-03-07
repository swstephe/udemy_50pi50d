function App() {
  return (
    <>
      <h2>Custom Range Slider</h2>
      <div className="range-container">
        <input type="range" id="range" min="0" max="100"/>
        <label htmlFor="range">50</label>
      </div>
    </>
  )
}

export default App
