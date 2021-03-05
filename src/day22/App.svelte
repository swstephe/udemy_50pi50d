<script>
  import { onMount } from 'svelte'

  let canvas
  let ctx
  let size = 10
  let isPressed = false
  let color = 'black'
  let x
  let y

  function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI*2, true)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()
  }

  onMount(() => {
    ctx = canvas.getContext('2d')
  })
</script>

<style>
  canvas {
    border: 2px solid steelblue;
  }

  .toolbox {
    background-color: steelblue;
    border: 1px solid slateblue;
    display: flex;
    width: 804px;
    padding: 1rem;
  }

  .toolbox > * {
    background-color: #fff;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    margin: .25rem;
    padding: .25rem;
    cursor: pointer;
  }

  .toolbox > *:last-child {
    margin-left: auto;
  }
</style>

<canvas
    bind:this={canvas}
    id="canvas"
    width="800"
    height="800"
    on:mousedown={(e) => {
      isPressed = true
      x = e.offsetX
      y = e.offsetY
    }}
    on:mouseup={(e) => {
      isPressed = false
      x = undefined
      y = undefined
    }}
    on:mousemove={(e) => {
      if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
      }
    }}
></canvas>

<div class="toolbox">
  <button id="decrease" on:click={() => size -= 5} disabled={size === 5}>-</button>
  <span id="size">{size}</span>
  <button id="increase" on:click={() => size += 5} disabled={size === 50}>+</button>
  <input type="color" id="color" bind:value={color}>
  <button id="clear" on:click={() => ctx.clearRect(0, 0, canvas.width, canvas.height)}>X</button>
</div>
