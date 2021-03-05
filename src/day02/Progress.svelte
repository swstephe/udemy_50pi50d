<script>
  import Circle from './Circle.svelte'

  export let count = 4
  export let currentActive = 0
</script>

<style>
  .progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
  }

  .progress-container::before {
    content: '';
    background-color: var(--line-border-empty);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }

  .progress {
    background-color: var(--line-border-fill);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0;
    z-index: -1;
    transition: .4s ease;
  }
</style>

<div class="progress-container">
  <div class="progress" style="width: {100 * currentActive / (count - 1)}%"></div>
  {#each Array(count) as _, idx}
    <Circle active={currentActive >= idx}>{idx + 1}</Circle>
  {/each}
</div>
