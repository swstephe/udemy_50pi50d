import classNames from 'classnames'
import insects from './insects.json'
import ChooseInsectButton from './ChooseInsectButton'

function Screen2({show, setSelected, setScreen}) {
  function select(insect) {
    setSelected(insect)
    setScreen(2)
  }

  return (
    <div className={classNames('screen', {up: show})}>
      <h1>What is your "favorite" insect</h1>
      <ul className="insects-list">
        {insects.map((insect, idx) => (
          <li key={idx}>
            <ChooseInsectButton insect={insect} select={select}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Screen2
