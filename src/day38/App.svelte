<script>
  import tabs from './tabs.json'
  const url = (photo_id, w) => `https://images.unsplash.com/photo-${photo_id}`
    + "?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"
    + `&w=${w}&q=80`

  let current = 0
</script>

<div class="phone">
  {#each tabs as tab, idx}
    <img
        src={url(tab.src[0], tab.src[1])}
        alt={tab.alt}
        class="content"
        class:show={current===idx}
    >
  {/each}
  <nav>
    <ul>
      {#each tabs as tab, idx}
        <li class:active={current===idx} on:click={() => current = idx}>
          <i class="fas fa-{tab.icon}"></i>
          <p>{tab.label}</p>
        </li>
      {/each}
    </ul>
  </nav>
</div>
