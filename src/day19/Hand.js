import classNames from 'classnames'

function Hand({unit, total, className}) {
  const rot = 360*unit/total

  return <div
    className={classNames('needle', className)}
    style={{transform: `translate(-50%,-100%) rotate(${rot}deg)`}}
  />
}
export default Hand
