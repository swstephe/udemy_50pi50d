import { useState } from 'react'
import Tag from './Tag'

function App() {
  const [tags, setTags] = useState([
    'Choice 1',
    'Choice 2',
    'Choice 3'
  ])
  const [ highlight, setHighlight ] = useState(1)
  const pickRandomTag = () => Math.floor(Math.random()*tags.length)

  function createTags(input) {
    setTags(
      input
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
    )
  }

  function randomSelect() {
    const times = 30
    const interval = setInterval(
      () => setHighlight(pickRandomTag()),
      100
    )

    setTimeout(() => {
      clearInterval(interval)
      setTimeout(
        () => setHighlight(pickRandomTag()),
        100
      )
    }, times*100)
  }

  return (
    <div className="container">
      <h3>Enter all of the choices divided by a comma (',').
      <br/> Press Enter when you're done</h3>
      <textarea
        id="textarea"
        placeholder="Enter choices here..."
        onKeyUp={(e) => {
          createTags(e.target.value)
          if (e.key === 'Enter') {
            setTimeout(() => {
              e.target.value = ''
            }, 10)
            randomSelect()
          }
        }}
      />
      <div id="tags">
        {tags.map((tag, idx) => {
            return <Tag key={idx} highlight={idx === highlight}>{tag}</Tag>
        })}
      </div>
    </div>
  )
}

export default App
