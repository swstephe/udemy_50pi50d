<script>
  import { onMount } from 'svelte'
  const language = 'default'
  let mode = 'dark'
  let time = new Date()

  const styleTransform = (deg) => `transform: translate(-50%,-100%) rotate(${deg}deg)`

  $: hourStyle = styleTransform((360*time.getHours())/12)
  $: minuteStyle = styleTransform((360*time.getMinutes())/60)
  $: secondStyle = styleTransform((360*time.getSeconds())/60)

  function switchMode() {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    const html = document.documentElement
    if (html) {
      html.classList.remove(mode)
      html.classList.add(newMode)
    }
    mode = newMode
  }

  onMount(() => {
    document.documentElement.classList.add(mode)
    setInterval(() => time = new Date(), 1000)
  })
</script>

<button class="toggle" on:click={() => {switchMode()}}>
  {#if mode === 'dark'}Dark{:else}Light{/if}  mode
</button>
<div class="clock-container">
  <div class="clock">
    <div class="needle hour" style={hourStyle}></div>
    <div class="needle minute" style={minuteStyle}></div>
    <div class="needle second" style={secondStyle}></div>
    <div class="center-point"></div>
  </div>
  <div class="time">
    {time.toLocaleTimeString(language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })}
  </div>
  <div class="date">
    {time.toLocaleString(language, {month: 'short'})},
    {time.toLocaleString(language, {weekday: 'long'})}
    <span class="circle">
      {time.toLocaleString(language, {day: 'numeric'})}
    </span>
  </div>
</div>
