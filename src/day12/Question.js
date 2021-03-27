import classNames from 'classnames'
import { useState } from 'react'


function Question(props) {
  const [active, setActive] = useState(props.active)
  const { question } = props

  return (
    <div className={classNames('faq', {active})}>
      <h3 className="faq-title">{question.question}</h3>
      <p className="faq-text">{question.answer}</p>
      <button className="faq-toggle" onClick={() => setActive(!active)}>
        <i className="fas fa-chevron-down"/>
        <i className="fas fa-times"/>
      </button>
    </div>
  )
}

export default Question
