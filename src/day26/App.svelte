<script>
  import slides from './slides.json'
  let clientHeight = 0
  let active = 0

  function wrap(value, min, max) {
    return (value < min) ? max : (value > max) ? min : value
  }

  function changeSlide(direction) {
    active = wrap(active + {up: 1, down: -1}[direction], 0, slides.length - 1)
  }
</script>

<div class="slider-container" bind:clientHeight={clientHeight}>
  <div class="left-slide"
      style="top: {-(slides.length - 1)*100 + 'vh'}; transform: {`translateY(${active * clientHeight}px)`};">
    {#each slides as image}
      <div style="background-color: {image.color}">
        <h1>{image.title}</h1>
        <p>{image.text}</p>
      </div>
    {/each}
  </div>
  <div
      class="right-slide"
      style="transform: {`translateY(${-active * clientHeight}px)`};">
    {#each slides as image}
      <div style="background-image: {`url('${image.img}')`};"></div>
    {/each}
  </div>
  <div class="action-buttons">
    <button class="down-button" on:click={() => changeSlide('down')}>
      <i class="fas fa-arrow-down"></i>
    </button>
    <button class="up-button" on:click={() => changeSlide('up')}>
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</div>
