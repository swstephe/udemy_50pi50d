function Panel(props) {
  return (
    <div className={"panel" + (props.active ? ' active' : '')}
         style={{backgroundImage: `url("${props.image.img}")`}}
         onClick={props.onClick}
    >
      <h3>{props.image.text}</h3>
    </div>
  )
}

export default Panel
