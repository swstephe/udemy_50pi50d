<script>
  const nums = [3, 2, 1, 0]
  let state = 0
  $: final = state === nums.length*2
</script>

<div class="counter" class:hide={final}>
  <div class="nums">
    {#each nums as num, idx}
      <span
        class:in={state === idx*2}
        class:out={state === idx*2 + 1}
        on:animationend={() => state++}
      >{num}</span>
    {/each}
  </div>
  <h4>Get Ready</h4>
</div>
<div class="final" class:show={final}>
  <h1>Go</h1>
  <button id="replay" on:click={() => state = 0}>Replay</button>
</div>
