import { useRef, useState } from 'react'

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function RangeSlider({min, max, value, setValue}) {
  const labelRef = useRef()
  const [left, setLeft] = useState(112)

  function handleInput(e) {
    setValue(+e.target.value)
    const label = labelRef.current

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    setLeft(
      value*(num_width/max)
      - num_label_width/2
      + scale(value, min, max, 10, -10)
    )
  }

  return (
    <div className="range-container">
      <input
        type="range"
        id="range"
        min={min}
        max={max}
        onInput={handleInput}
      />
      <label ref={labelRef} htmlFor="range" style={{left: `${left}px`}}>
        {value}
      </label>
    </div>
  )
}

export default RangeSlider
