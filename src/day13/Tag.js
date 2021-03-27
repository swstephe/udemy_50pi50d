import classNames from 'classnames'

function Tag({ children, highlight }) {
  return <span className={classNames('tag', {highlight})}>
    {children}
  </span>
}

export default Tag
