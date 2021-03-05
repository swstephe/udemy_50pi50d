<script>
  import { onMount } from 'svelte'

  const url = (photo_id, w) => `https://images.unsplash.com/photo-${photo_id}`
    + '?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop'
    + `&w=${w}&q=80`

  const images = [
    { src: url('1599394022918-6c2776530abb', 1458), alt: 'first'},
    { src: url('1593642632559-0c6d3fc62b89', 1500), alt: 'second'},
    { src: url('1599423300746-b62533397364', 1500), alt: 'third'},
    { src: url('1599561046251-bfb9465b4c44', 1492), alt: 'fourth'}
  ]

  function run() {
    idx++
    changeImage()
  }

  function changeImage() {
    if (idx > images.length - 1) {
      idx = 0
    } else if (idx < 0) {
      idx = images.length - 1
    }
  }

  function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
  }

  function handlePrev() {
    idx--
    resetInterval()
    changeImage()
  }

  function handleNext() {
    idx++
    resetInterval()
    changeImage()
  }

  let idx = 0
  let interval

  onMount(() => {
    interval = setInterval(run, 2000)
  })
</script>

<div class="carousel">
  <div class="image-container" id="imgs">
    {#each images as img}
      <img
        src={img.src}
        alt={img.alt}
        style={`transform: translateX(${-500*idx}px);`}
      />
    {/each}
  </div>
  <div class="buttons-container">
    <button id="left" class="btn" on:click={handlePrev}>Prev</button>
    <button id="right" class="btn" on:click={handleNext}>Next</button>
  </div>
</div>
