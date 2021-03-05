<script>
  const APIURL = 'https://api.github.com/users/'

  let error
  let user
  let repos

  async function getUser(username) {
    try {
      const userData = await axios(APIURL + username)
      user = userData.data
      try {
        const reposData = await axios(APIURL + username + '/repos?sort=created')
        repos = reposData.data
      } catch (err) {
        error = 'Problem fetching repos'
      }
    } catch (err) {
      if (err.response.status === 404) {
        error = 'No profile with this username'
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const user = search.value
    if (user) {
      getUser(user)
      search.value = ''
    }
  }
</script>

<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous"></script>
</svelte:head>

<form class="user-form" id="form" on:submit={handleSubmit}>
  <input type="text" id="search" placeholder="Search a Github User">
</form>
<main id="main">
  {#if user}
    <div class="card">
      <div>
        <img src={user.avatar_url} alt={user.name} class="avatar">
      </div>
      <div class="user-info">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <ul>
          <li>{user.followers} <strong>Followers</strong></li>
          <li>{user.following} <strong>Following</strong></li>
          <li>{user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          {#if repos}
            {#each repos as repo}
              <a href={repo.html_url} class="repo" target="_blank">{repo.name}</a>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  {:else if error}
    <div class="card">
      <h1>{error}</h1>
    </div>
  {/if}
</main>
