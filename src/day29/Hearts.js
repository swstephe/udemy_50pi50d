import { useEffect } from 'react'
import Heart from './Heart'

function Hearts({hearts=[], setHearts, delay=1000, onClick}) {
  useEffect(() => {
    const items = [...hearts]
    const timer = setTimeout(() => {
      console.log('timeout:', items)
      if (items.length) {
        items.shift()
        setHearts(items)
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [hearts, delay, setHearts])

  return (
    <div className="loveMe" onClick={onClick}>
      {hearts.map((e, idx) => <Heart key={idx} e={e}/>)}
    </div>
  )
}

export default Hearts
