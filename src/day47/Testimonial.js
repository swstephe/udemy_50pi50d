function Testimonial({current}) {
  return (
    <>
      <div className="testimonial-container">
        <div className="progress-bar" />
        <div className="fas fa-quote-right fa-quote" />
        <div className="fas fa-quote-left fa-quote" />
        <p className="testimonial">{current.text}</p>
        <div className="user">
          <img src={current.photo} alt="user" className="user-image" />
          <div className="user-details">
            <h4 className="username">{current.name}</h4>
            <p className="role">{current.position}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
