function Label(props) {
  return (
    <label htmlFor={props.htmlFor}>
      {props.children.split('').map((letter, idx) =>
        <span style={{transitionDelay: `${idx*50}ms`}}>{letter}</span>
      )}
    </label>
  )
}

export default Label
