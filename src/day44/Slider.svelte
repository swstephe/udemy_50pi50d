<script>
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min)*(out_max - out_min)) / (in_max - in_min) + out_min
  }

  export let min = 0
  export let max = 100
  let value = (max + min) / 2
  let left = 110

  function handleInput(e) {
    value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    left = value * (num_width / max)
      - num_label_width / 2
      + scale(value, min, max, 10, -10)
  }
</script>

<div class="range-container">
  <input type="range" id="range" min="{min}" max="{max}" on:input={handleInput}>
  <label for="range" style="left: {left}px;">{value}</label>
</div>
