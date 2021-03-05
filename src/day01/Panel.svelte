<script>
  import { createEventDispatcher } from 'svelte';
  export let active
  export let img
  export let text

  const dispatch = createEventDispatcher()
</script>

<style>
  .panel {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 80vh;
      border-radius: 50px;
      color: #fff;
      cursor: pointer;
      flex: 0.5;
      margin: 10px;
      position: relative;
      transition: flex 0.7s ease-in;
  }

  .panel h3 {
      font-size: 24px;
      position: absolute;
      bottom: 20px;
      left: 20px;
      margin: 0;
      opacity: 0;
  }

  .panel.active {
      flex: 5;
  }

  .panel.active h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
  }

  @media(max-width: 480px) {
      .panel:nth-of-type(4),
      .panel:nth-of-type(5) {
          display: none;
      }
  }
</style>

<div
    class="panel"
    class:active={active}
    on:click={(event) => dispatch('click', event)}
    style="background-image: url('{img}')"
>
  <h3>{text}</h3>
</div>
