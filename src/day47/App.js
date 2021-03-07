function App() {
  return (
    <>
      <div className="testimonial-container">
        <div className="progress-bar" />
        <div className="fas fa-quote-right fa-quote" />
        <div className="fas fa-quote-left fa-quote" />
        <p className="testimonial">
          I've worked with literally hundreds of HTML/CSS
          developers and I have to say the top spot goes to
          this guy. This guy is an amazing developer. He
          stresses on good, clean code and pays heed to the
          details. I love developers who respect each and every
          aspect of a thoroughly thought out design and do their
          best to put it in code. He goes over and beyond and
          transforms ART into PIXELS - without a glitch, every
          time.
        </p>
        <div className="user">
          <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" className="user-image" />
          <div className="user-details">
            <h4 className="username">Miyah Myles</h4>
            <p className="role">Marketing</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
