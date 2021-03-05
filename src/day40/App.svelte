<script>
  let big = false
</script>

<button id="btn" class="magic" on:click={() => big = !big}>Magic 🎩</button>
<div id="boxes" class="boxes" class:big>
  {#each Array(4) as _, i}
    {#each Array(4) as _, j}
      <div class="box" style="background-position: {j*-125}px {i*-125}px;"></div>
    {/each}
  {/each}
</div>
