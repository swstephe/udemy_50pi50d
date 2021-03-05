<script>
  import CupBig from './CupBig.svelte'
  import CupSmall from './CupSmall.svelte'

  const totalCups = 8
  let fullCups = 0

  function handleClick(idx) {
    fullCups = idx + (fullCups <= idx ? 1 : 0)
  }
</script>

<style>
  .cups {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 280px;
  }

  .text {
    text-align: center;
    margin: 0 0 5px;
  }
</style>

<h1>Drink Water</h1>
<h3>Goal 2 Liters</h3>
<CupBig totalCups={totalCups} fullCups={fullCups}/>
<p class="text">Select how many glasses of water that you have drank</p>
<div class="cups">
  {#each Array(totalCups) as _, idx}
    <CupSmall full={idx < fullCups} on:click={() => handleClick(idx)}/>
  {/each}
</div>
