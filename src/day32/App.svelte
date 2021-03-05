<script>
  import Toggle from './Toggle.svelte'
  const keys = ['good', 'cheap', 'fast']
  const labels = ['Good', 'Cheap', 'Fast']
  const checked = [false, false, false]
  const uncheckedKeys = ['fast', 'good', 'cheap']
  const unchecked = uncheckedKeys.map(key => keys.indexOf(key))

  function handleChange(event) {
    if (checked.filter(check => check).length === keys.length) {
      checked[event.detail] = false
    }
  }
</script>

<h2>How do you want your project to be?</h2>
{#each keys as key, idx}
  <Toggle
      id={key}
      not={unchecked[idx]}
      bind:checked={checked[idx]}
      on:change={handleChange}
  >
    {labels[idx]}
  </Toggle>
{/each}
