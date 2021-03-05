<script>
  let nav
  let y
  $: active = nav && y > nav.offsetHeight + 150
</script>

<svelte:window bind:scrollY={y}/>

<nav bind:this={nav} class="nav" class:active>
  <div class="container">
    <slot/>
  </div>
</nav>
