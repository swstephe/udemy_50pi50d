import classNames from 'classnames'

function Screen1({show, setScreen}) {
  return (
    <div className={classNames('screen', {up: !show})}>
      <h1>Catch The Insect</h1>
      <button className="btn" id="start-btn" onClick={() => setScreen(1)}>
        Play Game
      </button>
    </div>
  )
}

export default Screen1
