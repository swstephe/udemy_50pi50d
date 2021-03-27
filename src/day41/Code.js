import { useEffect, useRef } from 'react'

function Code({code, idx, setCode}) {
  const ref = useRef()

  useEffect(() => {
    if (idx === 0) {
      ref.current.focus()
    }
  }, [idx])

  return (
    <input
      ref={ref}
      type="number"
      className="code"
      placeholder="0"
      min="0"
      max="9"
      value={code}
      required
      onKeyDown={(e) => {
        if (e.key >= '0' && e.key <= '9') {
          e.target.value = ''
          setCode(idx, e.key)
          const sibling = e.target.nextElementSibling
          if (sibling) {
            setTimeout(() => sibling.focus(), 10)
          }
        } else if (e.key === 'Backspace') {
          const sibling = e.target.previousElementSibling
          if (sibling) {
            setTimeout(() => sibling.focus(), 10)
          }
        }
      }}
    />
  )
}

export default Code
