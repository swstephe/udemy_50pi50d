import classNames from 'classnames'
import { useEffect } from 'react'

function Toasts({ toasts=[], setToasts, delay=3000}) {
  useEffect(() => {
    const items = [...toasts]
    const timer = setTimeout(() => {
      if (items.length) {
        items.shift()
        setToasts(items)
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [toasts, delay, setToasts])

  return (
    <div id="toasts">
      {toasts.map((toast, idx) => (
        <div key={idx} className={classNames('toast', toast.type)}>
          {toast.message}
        </div>
      ))}
    </div>
  )
}

export default Toasts
