import { useEffect, useState } from 'react'
import User from './User'

const url = 'https://randomuser.me/api?results=50'

function App() {
  const [users, setUsers] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const { results } = await res.json()
      setUsers(results)
    }
    // noinspection JSIgnoredPromiseFromCall
    fetchData()
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h4 className="title">Live User Filter</h4>
        <small className="subtitle">Search by name and/or location</small>
        <input type="text" id="filter" placeholder="Search"
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}/>
      </header>
      <ul id="result" className="user-list">
        {
          users ? users.map((user, idx) =>
            <User key={idx} user={user} searchTerm={searchTerm} />
        ) : <li><h3>Loading..</h3></li>
      }
      </ul>
    </div>
  )
}
export default App
