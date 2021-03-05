<script>
  import {createEventDispatcher} from "svelte";

  let dispatch = createEventDispatcher()
  export let sound
  let audio

  function play() {
    audio.play()
    dispatch('play', audio)
  }
</script>

<style>
  .btn {
    background-color: rebeccapurple;
    border-radius: 5px;
    border: none;
    color: #fff;
    margin: 1rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    font-family: inherit;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn:focus {
    outline: none;
  }
</style>

<audio bind:this={audio} src="sounds/{sound}.mp3" preload="auto"></audio>
<button class="btn" on:click={play}>{sound}</button>
