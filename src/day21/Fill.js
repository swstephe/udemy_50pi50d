import classNames from 'classnames'
import { useEffect, useState } from 'react'

function Fill() {
  const [hold, setHold] = useState(false)
  const [invisible, setInvisible] = useState(false)

  useEffect(() => {
    if (hold) {
      setTimeout(() => setInvisible(true), 0)
    }
  }, [hold])

  function handleDragStart(e) {
    setHold(true)
  }

  function handleDragEnd(e) {
    setHold(false)
    setInvisible(false)
  }

  return <div
    className={classNames({
      invisible,
      fill: !invisible,
      hold: !invisible && hold
    })}
    draggable
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
  />
}

export default Fill
