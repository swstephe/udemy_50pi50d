function Toggle(props) {
  return (
    <button className="icon" id="toggle" onClick={props.onClick}>
      <span className="line line1"/>
      <span className="line line2"/>
    </button>
  )
}
export default Toggle
