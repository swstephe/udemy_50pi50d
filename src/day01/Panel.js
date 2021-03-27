import classNames from 'classnames'

function Panel({ active, image, onClick }) {
  return (
    <div className={classNames('panel', {active})}
         style={{backgroundImage: `url("${image.img}")`}}
         onClick={onClick}
    >
      <h3>{image.text}</h3>
    </div>
  )
}

export default Panel
