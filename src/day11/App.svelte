<script>
  let keyDown
</script>

<style>
  .key {
    border: 1px solid #999;
    background-color: #eee;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    flex-direction: column;
    margin: 10px;
    min-width: 250px;
    position: relative;
  }

  .key small {
    position: absolute;
    top: -24px;
    left: 0;
    text-align: center;
    width: 100%;
    color: #555;
    font-size: 14px;
  }
</style>

<svelte:window on:keydown={(event) => keyDown = {
  key: event.key,
  keyCode: event.keyCode,
  code: event.code
}}/>

<div>
  <div class="key">
    {#if keyDown}
      <div class="key">
        {keyDown.key === ' ' ? 'Space' : keyDown.key}
        <small>event.key</small>
      </div>
      <div class="key">
        {keyDown.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        {keyDown.code}
        <small>event.code</small>
      </div>
    {:else}
      Press any key to get keyCode
    {/if}
  </div>
</div>
