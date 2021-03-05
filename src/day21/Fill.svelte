<script>
  let state = 'fill'

  $: hold = state === 'hold'
  $: fill = state === 'fill' || hold
  $: invisible = state === 'invisible'

  function dragStart() {
    state = 'hold'
    setTimeout(() => state = 'invisible', 0)
  }

  function dragEnd() {
    state = 'fill'
  }
</script>

<style>
  .fill {
    background-image: url('https://source.unsplash.com/random/150x150');
    height: 145px;
    width: 145px;
    cursor: pointer;
  }

  .hold {
    border: solid 5px #ccc;
  }
</style>

<div
    class:fill
    class:hold
    class:invisible
    draggable="true"
    on:dragstart={dragStart}
    on:dragend={dragEnd}
></div>
