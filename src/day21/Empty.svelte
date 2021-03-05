<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  let hovered = false

  function dragOver(e) {
    e.preventDefault()
  }

  function dragEnter(e) {
    e.preventDefault()
    hovered = true
  }

  function dragLeave() {
    hovered = false
  }

  function dragDrop() {
    hovered = false
    dispatch('dropped')
  }
</script>

<style>
  .empty {
    height: 150px;
    width: 150px;
    margin: 10px;
    border: solid 3px black;
    background: white
  }

  .hovered {
    background-color: #333;
    border-color: white;
    border-style: dashed;
  }
</style>

<div
    class="empty"
    class:hovered
    on:dragover={dragOver}
    on:dragenter={dragEnter}
    on:dragleave={dragLeave}
    on:drop={dragDrop}
>
  <slot/>
</div>
