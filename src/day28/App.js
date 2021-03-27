import { useRef, useState } from 'react'

import { getRepos, getUser } from './api'
import ErrorCard from './ErrorCard'
import UserCard from './UserCard'


function App() {
  const [ user, setUser ] = useState(null)
  const [ repos, setRepos ] = useState([])
  const [ error, setError ] = useState('')
  const inputRef = useRef()

  async function onSubmit(e) {
    e.preventDefault()
    setError(null)
    const username = inputRef.current.value
    if (username) {
      try {
        setUser(await getUser(username))
        setRepos(await getRepos(username))
      } catch (err) {
        setError(err.message)
      }
      inputRef.current.value = ''
    }
  }

  return (
    <>
      <form action="" className="user-form" id="form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          id="search"
          placeholder="Search a Github User"
        />
      </form>
      <main id="main">{
        error ? <ErrorCard msg={error}/>
          : user && <UserCard user={user} repos={repos}/>
      }</main>
    </>
  )
}

export default App
