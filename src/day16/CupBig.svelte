<script>
  export let fullCups = 0
  export let totalCups = 0
  $: percentage = fullCups / totalCups
</script>

<style>
  .remained {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    transition: 0.3s ease;
  }

  .remained span {
    font-size: 20px;
    font-weight: bold;
  }

  .remained small {
    font-size: 12px;
  }

  .percentage {
    background-color: var(--fill-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    height: 0;
    transition: 0.3s ease;
  }
</style>

<div class="cup">
  {#if fullCups < totalCups}
    <div class="remained">
      <span id="liters">{2 - .250*fullCups}L</span>
      <small>Remained</small>
    </div>
  {/if}
  {#if fullCups > 0}
    <div class="percentage" style="height: {percentage*330}px">{percentage*100}%</div>
  {/if}
</div>
