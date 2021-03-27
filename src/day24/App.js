import classNames from 'classnames'
import { useEffect, useState } from 'react'

const params = {
    ixlib: 'rb-1.2.1',
    ixid: 'eyJhcHBfaWQiOjEyMDd9',
    auto: 'format',
    fit: 'crop',
    w: '2102',
    q: '80'
}
const esc = encodeURIComponent
const query = Object.keys(params)
  .map(k => esc(k) + '=' + esc(params[k]))
  .join('&')

const card_data = {
  img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?" + query,
  title: "Lorem ipsum dolor sit amet.",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quo?",
  profile: "https://randomuser.me/api/portraits/men/45.jpg",
  name: "John Doe",
  date: "Oct 08, 2020"
}

function App() {
  const [card, setCard] = useState(null)

  useEffect(
    () => setTimeout(() => setCard(card_data),2500),
    []
  )

  return (
    <div className="card">
      <div className={classNames('card-header', {'animated-bg': !card})} id="header">
        {card && <img src={card.img} alt=""/>}
      </div>
      <div className="card-content">
        <h3 className={classNames('card-title', {'animated-bg animated-bg-text': !card})} id="title">
          {card ? card.title : <>&nbsp;</>}
        </h3>
        <p className="card-excerpt" id="excerpt">
          {card ? card.excerpt : (
            <>
              &nbsp;
              <span className={classNames({'animated-bg animated-bg-text': !card})}>&nbsp;</span>
              <span className={classNames({'animated-bg animated-bg-text': !card})}>&nbsp;</span>
              <span className={classNames({'animated-bg animated-bg-text': !card})}>&nbsp;</span>
            </>
            )}
        </p>
        <div className="author">
          <div className={classNames('profile-img', {'animated-bg': !card})} id="profile_img">
            {card && <img src={card.profile} alt=""/>}
          </div>
          <div className="author-info">
            <strong className={classNames({'animated-bg animated-bg-text': !card})} id="name">{card && card.name}</strong>
            <small className={classNames({'animated-bg animated-bg-text': !card})} id="date">{card && card.date}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
