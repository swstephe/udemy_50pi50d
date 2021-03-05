<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let full = false

  function handleClick(event) {
    dispatch('click', event)
  }
</script>

<div class="cup cup-small" class:full on:click={handleClick}>250 ml</div>
