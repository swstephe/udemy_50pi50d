import classNames from 'classnames'
import { useState } from 'react'
import ratings from './ratings.json'

function App() {
  const [active, setActive] = useState(2)
  const [sent, setSent] = useState(false)

  return (
    <div id="panel" className="panel-container">
      {!sent ? (
        <>
          <strong>How satisfied are you with our<br />customer support performance?</strong>
          <div className="ratings-container">
            {ratings.map((rating, idx) => (
              <div key={idx}
                   className={classNames('rating', {active: active === idx})}
                   onClick={() => setActive(idx)}
              >
                <img src={rating.img} alt={rating.label} />
                <small>{rating.label}</small>
              </div>
            ))}
          </div>
          <button className="btn" id="send"
                  onClick={() => setSent(true)}
          >Send Review</button>
        </>
        ) : (
        <>
          <i className="fas fa-heart"/>
          <strong>Thank You!</strong>
          <br/>
          <strong> Feedback: {ratings[active].label}</strong>
          <p>We'll use your feedback to improve our customer support</p>
        </>
        )
      }
    </div>
  );
}

export default App;
