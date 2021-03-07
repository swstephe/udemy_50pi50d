function App() {
  return (
    <div className="carousel">
      <div className="image-container" id="imgs">
        <img
          src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80"
          alt="first"
        />
        <img
          src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt="second"
        />
        <img
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt="third"
        />
        <img
          src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
          alt="fourth"
        />
      </div>
      <div className="buttons-container">
        <button id="left" className="btn">Prev</button>
        <button id="right" className="btn">Next</button>
      </div>
    </div>
  )
}

export default App