import classNames from 'classnames'
import { useState } from 'react'
import Fill from './Fill'

function Empty({ filled, onFill, onEmpty }) {
  const [hovered, setHovered] = useState(false)

  function handleDragOver(e) {
    e.preventDefault()
  }

  function handleDragEnter(e) {
    e.preventDefault()
    setHovered(true)
  }

  function handleDragLeave(e) {
    setHovered(false)
    onEmpty()
  }

  function handleDrop(e) {
    setHovered(false)
    onFill()
  }

  return (
    <div
      className={classNames('empty', { hovered})}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {filled && <Fill/>}
    </div>
  )
}

export default Empty
