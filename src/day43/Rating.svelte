<script>
  import { createEventDispatcher } from 'svelte'
  export let rating

  const dispatch = createEventDispatcher()
</script>

<div class="rating" on:click={() => dispatch('click')}>
  <img src={rating.img} alt="">
  <small>{rating.text}</small>
</div>
