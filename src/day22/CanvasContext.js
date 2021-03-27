import React, { useContext, useRef, useState } from 'react'

const CanvasContext = React.createContext({
  size: 10,
  color: '#000000',
  children: []
})

export const CanvasProvider = ({ children }) => {
  const [size, setSize] = useState(10)
  const [color, setColor] = useState('#000000')
  const [isDrawing, setIsDrawing] = useState(false)
  const [x, setX] = useState(undefined)
  const [y, setY] = useState(undefined)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  function drawCircle(ctx, x, y) {
    console.log('drawCircle(' + size + ',' + color + ')')
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI*2, true)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()
  }

  function clearCanvas() {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  function prepareCanvas() {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    contextRef.current = context
  }

  function startDrawing({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent
    setIsDrawing(true)
    setX(offsetX)
    setY(offsetY)
  }

  function finishDrawing() {
    setIsDrawing(false)
    setX(undefined)
    setY(undefined)
  }

  function draw({ nativeEvent }) {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    drawCircle(contextRef.current, offsetX, offsetY)
    drawLine(contextRef.current, x, y, offsetX, offsetY)
    setX(offsetX)
    setY(offsetY)
  }


  return (
    <CanvasContext.Provider
      value={{
        color,
        setColor,
        size,
        setSize,
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export const useCanvas = () => useContext(CanvasContext)
