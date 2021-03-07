function App() {
  return (
    <>
      <div className="screen">
        <h1>Catch The Insect</h1>
        <button className="btn" id="start-btn">Play Game</button>
      </div>
      <div className="screen">
        <h1>What is your "favorite" insect</h1>
        <ul className="insects-list">
          <li>
            <button className="choose-insect-btn">
              <p>Fly</p>
              <img src="http://pngimg.com/uploads/fly/fly_PNG3946.png" alt="fly"/>
            </button>
          </li>
          <li>
            <button className="choose-insect-btn">
              <p>Mosquito</p>
              <img src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png" alt="mosquito" />
            </button>
          </li>
          <li>
            <button className="choose-insect-btn">
              <p>Spider</p>
              <img src="http://pngimg.com/uploads/spider/spider_PNG12.png" alt="spider" />
            </button>
          </li>
          <li>
            <button className="choose-insect-btn">
              <p>Roach</p>
              <img src="http://pngimg.com/uploads/roach/roach_PNG12163.png" alt="roach" />
            </button>
          </li>
        </ul>
      </div>
      <div className="screen game-container" id="game-container">
        <h3 id="time" className="time">Time: 00:00</h3>
        <h3 id="score" className="score">Score: 0</h3>
        <h5 id="message" className="message">
          Are you annoyed yet?<br />
          You are playing an impossible game!!
        </h5>
      </div>
    </>
)
}
export default App
