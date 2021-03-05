<script>
  const images = [
    { img: 'photo-1549880338-65ddcdfd017b', w: 2100 },
    { img: 'photo-1511593358241-7eea1f3c84e5', w: 1934 },
    { img: 'photo-1495467033336-2effd8753d51', w: 2100 },
    { img: 'photo-1522735338363-cc7313be0ae0', w: 2689 },
    { img: 'photo-1559087867-ce4c91325525', w: 2100}
  ]
  let active = 0

  $: document.body.style.backgroundImage = `url('${imageUrl(images[active])}')`

  function imageUrl(image) {
    return `https://images.unsplash.com/${image.img}`
      + "?ixlib=rb-1.2.1"
      + "&ixid=eyJhcHBfaWQiOjEyMDd9}"
      + "&auto=format"
      + "&fit=crop"
      + `&w=${image.w}`
      + "q=80"
  }
</script>

<style>
.slider-container {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 70vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
}

.slide {
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: -15vh;
  left: -15vw;
  transition: 0.4s ease;
  z-index: 1;
}

.slide.active {
  opacity: 1;
}

.arrow {
  position: fixed;
  background-color: transparent;
  color: #fff;
  padding: 20px;
  font-size: 30px;
  border: 2px solid orange;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.arrow:focus {
  outline: 0;
}

.left-arrow {
  left: calc(15vw - 65px);
}

.right-arrow {
  right: calc(15vw - 65px);
}
</style>

<div class="slider-container">
  {#each images as image, idx}
  <div
      class="slide" class:active={active===idx}
      style="background-image: url('{imageUrl(image)}');"
  ></div>
  {/each}
  <button class="arrow left-arrow" id="left" on:click={() => {
    active = active > 0 ? active - 1 : images.length - 1
  }}>
    <i class="fas fa-arrow-left"></i>
  </button>
  <button class="arrow right-arrow" id="right" on:click={() => {
    active = active < images.length - 1 ? active + 1 : 0
  }}>
    <i class="fas fa-arrow-right"></i>
  </button>
</div>
