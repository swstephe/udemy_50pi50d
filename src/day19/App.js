function App() {
  return (
    <>
      <button className="toggle">Dark mode</button>
      <div className="clock-container">
        <div className="clock">
          <div className="needle hour"/>
          <div className="needle minute"/>
          <div className="needle second"/>
          <div className="center-point"/>
        </div>
        <div className="time"/>
        <div className="date"/>
      </div>
    </>
  )
}
export default App
