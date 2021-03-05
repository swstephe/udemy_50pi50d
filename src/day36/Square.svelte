<script>
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
  const baseStyle = 'background-color: #1d1d1d; box-shadow: 0 0 2px black;'
  let style = baseStyle

  const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)]

  function setColor() {
    const color = getRandomColor()
    style = `background-color: ${color};`
      + `box-shadow: 0 0 2px ${color}, 0 0 10px ${color}`
  }

  function removeColor() {
    style = baseStyle
  }
</script>

<div
  class="square"
  style={style}
  on:mouseover={setColor}
  on:mouseout={removeColor}
></div>
