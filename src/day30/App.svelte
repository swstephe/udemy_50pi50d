<script>
  import { onMount } from 'svelte'
  const typeText = "We Love Programming!"
  let text
  let idx = 1
  let speed = 1

  function writeText() {
    text = typeText.slice(0, idx)
    idx = (idx < typeText.length ? idx : 0) + 1
    setTimeout(writeText, 300 / speed)
  }

  onMount(() => writeText())
</script>

<h1 id="text">{text || 'Starting...'}</h1>
<div>
  <label for="speed">Speed:</label>
  <input type="number" name="speed" id="speed" min="1" max="5" step="1" bind:value={speed}>
</div>
