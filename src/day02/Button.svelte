<script>
  import { createEventDispatcher } from 'svelte'
  export let disabled = false

  const dispatch = createEventDispatcher()
</script>

<style>
  .btn {
    background-color: var(--line-border-fill);
    color: white;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
  }

  .btn:active {
    transform: scale(.98);
  }

  .btn:focus {
    outline: 0;
  }

  .btn:disabled {
    background-color: var(--line-border-empty);
    cursor: not-allowed;
  }
</style>

<button class="btn" disabled={disabled} on:click={(event) => dispatch('click', event)}>
  <slot/>
</button>
