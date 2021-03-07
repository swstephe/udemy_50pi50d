function App() {
  return (
    <>
      <h1>Drink Water</h1>
      <h3>Goal 2 Liters</h3>

      <div className="cup">
        <div className="remained" id="remained">
          <span id="liters"/>
          <small>Remained</small>
        </div>
        <div className="percentage" id="percentage"/>
      </div>

      <p className="text">Select how many glasses of water that you have drank</p>
      <div className="cups">
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
      </div>
    </>
  )
}

export default App
