<script>
  import { onMount } from 'svelte'

  export let icon = ''
  export let target = 0
  const increment = target / 200
  let counter = 0

  $: count = counter

  function updateCounter() {
    counter += Math.ceil(counter + increment)
    if (counter < target) {
      setTimeout(updateCounter, 100)
    }
  }

  onMount(updateCounter)
</script>

<style>
  .counter-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 30px 50px;
  }

  .counter {
    font-size: 60px;
    margin-top: 10px;
  }
</style>

<div class="counter-container">
  <i class="fab fa-{icon} fa-3x"></i>
  <div class="counter">{count}</div>
  <span><slot/></span>
</div>
