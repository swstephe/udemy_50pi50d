import classNames from 'classnames'

function Slide(props) {
  const { active, slide } = props

  return (
    <div
      className={classNames('slide', {active})}
      style={{backgroundImage: `url('${slide}')`}}
    />
  )
}

export default Slide
