function ToolBox(props) {
  const { color, size, onSize, onColor, onClear } = props

  return (
    <div className="toolbox">
      <button
        id="decrease"
        onClick={() => onSize(size < 10 ? 5 : size - 5)}
      >-</button>
      <span id="size">{size}</span>
      <button
        id="increase"
        onClick={() => onSize(size > 45 ? 50 : size + 5)}
      >+</button>
      <input
        type="color"
        id="color"
        value={color}
        onChange={e => onColor(e.target.value)}
      />
      <button id="clear" onClick={() => onClear()}>X</button>
    </div>
  )
}

export default ToolBox
