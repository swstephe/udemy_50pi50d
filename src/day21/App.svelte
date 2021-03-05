<script>
  import Empty from './Empty.svelte'
  import Fill from './Fill.svelte'

  const empties = new Array(5).fill(false)
  let slots = empties.map((_, i) => i === 0)

  function fill(idx) {
    slots = empties.map((_, i) => i === idx)
  }
</script>

{#each slots as slot, idx}
  <Empty on:dropped={() => fill(idx)}>
    {#if slot}
      <Fill/>
    {/if}
  </Empty>
{/each}
