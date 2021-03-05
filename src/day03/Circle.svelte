<script>
  import { createEventDispatcher } from 'svelte'
  export let rotated = false

  const dispatch = createEventDispatcher()
</script>

<style>
  .circle-container {
    position: fixed;
    top: -100px;
    left: -100px;
  }

  .circle {
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;
  }

  .circle.rotated {
    transform: rotate(-70deg);
  }

  .circle button {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100px;
    background: transparent;
    border: 0;
    font-size: 26px;
    color: #fff;
  }

  .circle button:focus {
    outline: none;
  }

  .circle button#open {
    left: 60%;
  }

  .circle button#close {
    top: 60%;
    transform: rotate(90deg);
    transform-origin: top left;
  }
</style>

<div class="circle-container">
  <div class="circle" class:rotated={rotated}>
    <button id="close" on:click={(event) => dispatch('close', event)}><i class="fas fa-times"></i></button>
    <button id="open" on:click={(event) => dispatch('open', event)}><i class="fas fa-bars"></i></button>
  </div>
</div>
