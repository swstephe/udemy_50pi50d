function BigCup(props) {
  const { cups, totalCups } = props

  function remainedStyle() {
    if (cups === totalCups) {
      return {visibility: 'hidden', height: '0'}
    } else {
      return {visibility: 'visible'}
    }
  }

  function percentageStyle() {
    if (cups === 0) {
      return { visibility: 'hidden', height: '0' }
    } else {
      return { visibility: 'visible', height: `${(cups / totalCups) * 330}px`}
    }
  }

  return (
    <div className="cup">
      <div className="remained" id="remained" style={remainedStyle()}>
        <span id="liters">{2 - (250*cups) / 1000}L</span>
        <small>Remained</small>
      </div>
      <div className="percentage" id="percentage" style={percentageStyle()}>
        {(cups / totalCups)*100}%
      </div>
    </div>
  )
}

export default BigCup
