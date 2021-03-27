import { useState } from 'react'
import questions from './questions.json'

const keys = ['a', 'b', 'c', 'd']

function App() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)

  function handleSubmit() {
    const current = questions[index]
    if (selected !== null) {
      if (current && selected === current.correct) {
        setScore(score + 1)
      }
      setSelected(null)
      setIndex(index + 1)
    }
  }

  return (
    <div className="quiz-container" id="quiz">
      {
        index < questions.length
          ? (
            <>
              <div className="quiz-header">
                <h2 id="question">{questions[index].question}</h2>
                <ul>
                  {questions[index].answers.map((answer, idx) => (
                    <li key={idx}>
                      <input type="radio"
                             name="answer"
                             id={keys[idx]}
                             className="answer"
                             checked={selected === idx}
                             onChange={() => setSelected(idx)}
                      />
                      <label htmlFor={keys[idx]}
                             id={keys[idx] + '_text'}
                      >{answer}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <button id="submit" onClick={handleSubmit}>Submit</button>
            </>
          )
          : (
            <>
              <h2>You answered correctly at {score}/{questions.length} questions</h2>
              <button onClick={() => {
                setSelected(null)
                setIndex(0)
                setScore(0)
              }}>Reload
              </button>
            </>
          )
      }
    </div>
  )
}

export default App