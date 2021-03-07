function App() {
  return (
    <>
      <button className="nav-btn open-btn">
        <i className="fas fa-bars" />
      </button>
      <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" className="logo" />
      <p className="text">Mobile Navigation</p>
      <div className="nav nav-black">
        <nav className="nav nav-red">
          <nav className="nav nav-white">
            <button className="nav-btn close-btn">
              <i className="fas fa-times">/</i>
            </button>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo"
                 className="logo" />
            <ul className="list">
              <li><a href="#">Teams</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Life at Netflix</a></li>
              <li>
                <ul>
                  <li><a href="#">Netflix culture memo</a></li>
                  <li><a href="#">Work life balance</a></li>
                  <li><a href="#">Inclusion &amp; diversity</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    </>
  )
}

export default App
