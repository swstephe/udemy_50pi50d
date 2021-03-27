import { useEffect, useRef, useState } from 'react'
import Movie from './Movie'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'api_key=bc50cf29dadb2abfaa403235d0ec6759'
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&page=1`
const SEARCH_API = `${BASE_URL}/search/movie?${API_KEY}&query=`

const exampleMovie = {
  title: 'Movie Title',
  poster_path: null,
  vote_average: 9.8,
  overview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
     aut blanditiis dignissimos excepturi facere mollitia qui veritatis!
     Dolores laboriosam, minima.`
}

function App() {
  const [movies, setMovies] = useState(Array(3).fill(exampleMovie))
  const [search, setSearch] = useState('')
  const inputRef = useRef()

  function getMovies(url) {
    fetch(url)
      .then(res => {
        res.json()
        .then(data => {
          setMovies(data.results)
        })
      })
  }

  useEffect(() => {
    getMovies(API_URL)
    inputRef.current.focus()
  },[])

  return (
    <>
      <header>
        <form
          id="form"
          onSubmit={e => {
            e.preventDefault()
            if (search && search !== '') {
              getMovies(SEARCH_API + search)
              setSearch('')
            } else {
              window.location.reload()
            }
          }}
        >
          <input
            ref={inputRef}
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </header>
      <main id="main">
        {movies.map((movie, idx) => <Movie key={idx} {...movie}/>)}
      </main>
    </>
  )
}
export default App
