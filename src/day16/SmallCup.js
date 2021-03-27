import classNames from 'classnames'

function SmallCup(props) {
  const { full, onClick } = props
  return <div
    className={classNames('cup', 'cup-small', {full})}
    onClick={onClick}
  >250 ml</div>
}

export default SmallCup
