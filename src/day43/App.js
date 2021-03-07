function App() {
  return (
    <div id="panel" className="panel-container">
      <strong>How satisfied are you with our<br />customer support performance?</strong>
      <div className="ratings-container">
        <div className="rating">
          <img src="https://image.flaticon.com/icons/svg/187/187150.svg" alt="" />
          <small>Unhappy</small>
        </div>
        <div className="rating">
          <img src="https://image.flaticon.com/icons/svg/187/187136.svg" alt="" />
          <small>Neutral</small>
        </div>
        <div className="rating active">
          <img src="https://image.flaticon.com/icons/svg/187/187122.svg" alt="" />
          <small>Satisfied</small>
        </div>
      </div>
      <button className="btn" id="send">Send Review</button>
    </div>
  );
}

export default App;
