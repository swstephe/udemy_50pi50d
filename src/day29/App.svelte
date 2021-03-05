<script>
  let loveMe
  let clickTime = 0
  let timesClicked = 0
  let heart = false

  function createHeart(e) {
    heart = {
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    }
    timesClicked++
    setTimeout(() => heart = undefined, 1000)
  }

  function handleClick(e) {
    if (clickTime === 0) {
      clickTime = new Date().getTime()
    } else {
      const newTime = new Date().getTime()
      if (newTime - clickTime < 800) {
        createHeart(e)
        clickTime = 0
      } else {
        clickTime = newTime
      }
    }
  }
</script>

<h3>Double click on the image to <i class="fas fa-heart"></i> it.</h3>
<small>You liked it <span id="times">{timesClicked}</span> times</small>
<div class="loveMe" bind:this={loveMe} on:click={handleClick}>
  {#if heart}
    <i class="fas fa-heart" style="left: {heart.x}px; top: {heart.y}px;"/>
  {/if}
</div>
