import { forwardRef, useImperativeHandle, useState } from 'react'

function Canvas({ color, size }, ref) {
  let ctx
  const width = 800
  const height = 800
  const [isPressed, setIsPressed] = useState(false)
  const [x, setX] = useState(undefined)
  const [y, setY] = useState(undefined)

  useImperativeHandle(ref, () => ({clear}))

  function clear() {
    ctx.clearRect(0, 0, width, height)
  }

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

  function onMouseDown({nativeEvent}) {
    const { offsetX, offsetY } = nativeEvent
    setIsPressed(true)
    setX(offsetX)
    setY(offsetY)
  }

  function onMouseUp() {
    setIsPressed(false)
    setX(undefined)
    setY(undefined)
  }

  function onMouseMove({nativeEvent}) {
    const { offsetX, offsetY } = nativeEvent
    if (!isPressed) {
      return
    }
    drawCircle(offsetX, offsetY)
    drawLine(x, y, offsetX, offsetY)
    setX(offsetX)
    setY(offsetY)
  }

  return <canvas
    id="canvas"
    width={width}
    height={height}
    ref={c => ctx = c && c.getContext('2d')}
    onMouseDown={onMouseDown}
    onMouseUp={e => onMouseUp(e)}
    onMouseMove={e => onMouseMove(e)}
  />
}

export default forwardRef(Canvas)
