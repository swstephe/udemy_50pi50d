function Box({x, y}) {
  return (
    <div className="box" style={{backgroundPosition: `${x}px ${y}px`}}/>
  )
}

export default Box