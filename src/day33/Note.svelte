<script>
  import marked from 'marked'
  import { createEventDispatcher } from 'svelte'
  export let idx
  export let text = ''

  let editing = !!text

  const dispatch = createEventDispatcher()
</script>

<div class="note">
  <div class="tools">
    <button class="edit" on:click={() => editing=!editing}>
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete"  on:click={() => dispatch('delete', idx)}>
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="main" class:hidden={!editing}>
    {@html marked(text)}
  </div>
  <textarea
      class:hidden={editing}
      bind:value={text}
      on:input={dispatch('input', {idx: idx, text: text})}
  ></textarea>
</div>
