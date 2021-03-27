import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

function Box(props) {
  const [show, setShow] = useState()
  const ref = useRef()

  useEffect(() => {
    setShow(ref.current.getBoundingClientRect().top
      < props.triggerBottom)
  }, [props.scrollY, props.triggerBottom])

  return (
    <div ref={ref} className={classNames('box', {show: show})}>
      <h2>Content</h2>
    </div>
  )
}

export default Box
