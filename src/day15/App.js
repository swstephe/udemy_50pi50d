function App() {
  return (
    <>
    <div className="counter-container">
      <i className="fab fa-twitter fa-3x"/>
      <div className="counter" data-target="12000"/>
      <span>Twitter Followers</span>
    </div>
    <div className="counter-container">
      <i className="fab fa-youtube fa-3x"/>
      <div className="counter" data-target="5000"/>
      <span>YouTube Subscribers</span>
    </div>
    <div className="counter-container">
      <i className="fab fa-facebook fa-3x"/>
      <div className="counter" data-target="7500"/>
      <span>Faceback Fans</span>
    </div>
    </>
  )
}
export default App
