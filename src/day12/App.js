import Question from './Question'
import questions from './questions.json'


function App() {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {questions.map((question, idx) => {
          return <Question key={idx} question={question} active={idx === 0} />
        })}
      </div>
    </>
  )
}

export default App
