<script>
  import { onMount } from 'svelte'
  import Movie from './Movie.svelte'

  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_KEY = 'api_key=bc50cf29dadb2abfaa403235d0ec6759'
  const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&page=1`
  const SEARCH_API = `${BASE_URL}/search/movie?${API_KEY}&query="`
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

  let searchTerm = ''

  let movies = []

  async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    movies = data.results
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

  function handleSubmit(e) {
    e.preventDefault()
    if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm + '"')
      searchTerm = ''
    } else {
      window.location.reload()
    }
  }

  onMount(() => {
    getMovies(API_URL)
  })
</script>

<style>
  header {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    background-color: var(--secondary-color);
  }

  .search {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    padding: .5rem 1rem;
    color: #fff;
  }

  .search::placeholder {
    color: #7478c5;
  }

  .search:focus {
    outline: none;
    background-color: var(--primary-color);
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<header>
  <form id="form" on:submit={handleSubmit}>
    <input
        type="text"
        id="search"
        class="search"
        placeholder="Search"
        bind:value={searchTerm}
    >
  </form>
</header>

<main id="main">
  {#each movies as movie}
    <Movie movie={movie} />
  {/each}
</main>
