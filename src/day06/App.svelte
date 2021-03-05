<script>
  const boxes = Array(13)
  let shows
  let scrollY

  $: {
    const triggerBottom = window && .8*innerHeight
    shows = boxes.map(box => scrollY >= 0 && box && box.getBoundingClientRect().top < triggerBottom)
  }
</script>

<style>
  h1 {
    margin: 10px;
  }

  .box {
    background-color: steelblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0,0,0,0.3);
    transform: translateX(200%);
    transition: transform 0.4s ease;
  }

  .box:nth-of-type(even) {
    transform: translateX(-400%);
  }

  .box.show {
    transform: translateX(0);
  }

  .box h2 {
    font-size: 45px;
  }
</style>

<svelte:window bind:scrollY/>

<h1>Scroll to see the animation</h1>
{#each boxes as box, idx}
  <div class="box" class:show={shows[idx]} bind:this={box}>
    <h2>Content</h2>
  </div>
{/each}
