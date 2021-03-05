<script>
  import { onMount } from 'svelte'

  export let _for
  let label

  onMount(() => {
    label.innerHTML = label.innerText
      .split('')
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms;">${letter}</span>`)
      .join('')
  })
</script>

<label for={_for} bind:this={label}><slot/></label>
