<script>
  import { onMount } from 'svelte'
  let users
  let searchTerm = ''

  $: filterUsers = users && users.filter(user => !searchTerm || [
    user.name.first,
    user.name.last,
    user.location.city,
    user.location.country
  ].join(' ').toLowerCase().includes(searchTerm.toLowerCase()))

  async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()
    users = results
  }

  onMount(getData)
</script>

<div class="container">
  <header class="header">
    <h4 class="title">Live User Filter</h4>
    <small class="subtitle">Search by name and/or location</small>
    <input
      type="text"
      id="filter"
      placeholder="Search"
      bind:value={searchTerm}
    >
  </header>
  <ul id="result" class="user-list">
    {#if users}
      {#each filterUsers as user}
        <li>
          <img src={user.picture.large} alt={user.name.first}>
          <div class="user-info">
            <h4>{user.name.first} {user.name.last}</h4>
            <p>{user.location.city}, {user.location.country}</p>
          </div>
        </li>
      {/each}
    {:else}
      <li>
        <h3>Loading..</h3>
      </li>
    {/if}
  </ul>
</div>
