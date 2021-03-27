import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

function User({user, searchTerm}) {
  const ref = useRef()
  const [hide, setHide] = useState(false)

  useEffect(() => {
    let match = true
    if (ref.current && searchTerm) {
      match = ref.current.innerText.toLowerCase()
        .includes(searchTerm.toLowerCase())
    }
    setHide(!match)
  }, [searchTerm])

  return (
    <li ref={ref} className={classNames({hide})}>
      <img src={user.picture.large} alt={user.name.first} />
      <div className="user-info">
        <h4>{user.name.first} {user.name.last}</h4>
        <p>{user.location.city}, {user.location.country}</p>
      </div>
    </li>
  )
}

export default User
