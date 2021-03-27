function Ripple(props) {
  const { e } = props

  return <span
      className='circle'
      style={{
        top: `${e.clientY - e.target.offsetTop}px`,
        left: `${e.clientX - e.target.offsetLeft}px`
      }}
  />
}

export default Ripple
