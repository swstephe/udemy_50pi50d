<script>
  import Square from './Square.svelte'
  const SQUARES = 500
</script>

<div id="container" class="container">
  {#each Array(SQUARES) as _}
    <Square/>
  {/each}
</div>
