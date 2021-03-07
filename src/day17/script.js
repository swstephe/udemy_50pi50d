const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'api_key=bc50cf29dadb2abfaa403235d0ec6759'
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&page=1`
const SEARCH_API = `${BASE_URL}/search/movie?${API_KEY}&query="`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>`
    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const searchTerm = search.value
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm + '"')
    search.value = ''
  } else {
    window.location.reload()
  }
})

// Get initial movies
getMovies(API_URL)
