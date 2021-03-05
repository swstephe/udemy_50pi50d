<script>
  import { createEventDispatcher } from 'svelte'
  export let id
  export let not
  export let checked = false

  const dispatch = createEventDispatcher()
</script>

<div class="toggle-container">
  <input
      type="checkbox"
      id={id}
      class="toggle"
      bind:checked={checked}
      on:change={() => dispatch('change', not)}
  >
  <label for={id} class="label">
    <div class="ball"></div>
  </label>
  <span><slot/></span>
</div>
