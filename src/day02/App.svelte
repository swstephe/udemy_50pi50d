<script>
  import Progress from './Progress.svelte'
  import Button from './Button.svelte'

  let count = 4
  let currentActive = 0
</script>

<style>
    .container {
        text-align: center;
    }
</style>

<div class="container">
  <Progress count={count} currentActive={currentActive}/>
  <Button disabled={currentActive===0} on:click={() => currentActive--}>Prev</Button>
  <Button disabled={currentActive===count - 1} on:click={() => currentActive++}>Next</Button>
</div>
