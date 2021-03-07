function App() {
  return (
    <>
      <canvas id="canvas" width="800" height="800"/>
      <div className="toolbox">
        <button id="decrease">-</button>
        <span id="size">10</span>
        <button id="increase">+</button>
        <input type="color" id="color"/>
        <button id="clear">X</button>
      </div>
    </>
  )
}

export default App
