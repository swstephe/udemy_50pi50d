function Heart({e}) {
  return <i
    className="fas fa-heart"
    style={{
      top: `${e.clientY - e.target.offsetTop}px`,
      left: `${e.clientX - e.target.offsetLeft}px`
    }}
  />
}

export default Heart