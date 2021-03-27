import classNames from 'classnames'
import { useRef, useState } from 'react'
import { useRecursiveTimeout } from '../utils'

function Counter(props) {
  const {target, icon, children} = props
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  countRef.current = count

  useRecursiveTimeout(() => {
    if (countRef.current < target) {
      const increment = target / 200
      setCount(Math.ceil(countRef.current + increment))
      return true
    }
    setCount(target)
    return false
  }, 1)

  return (
    <div className="counter-container">
      <i className={classNames('fab', `fa-${icon}`, 'fa-3x')}/>
      <div className="counter">{count}</div>
      <span>{children}</span>
    </div>
  )
}
export default Counter
