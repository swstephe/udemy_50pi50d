function Num({children, state, onAnimationEnd}) {
  return (
    <span className={state} onAnimationEnd={onAnimationEnd}>
      {children}
    </span>
  )
}

export default Num
