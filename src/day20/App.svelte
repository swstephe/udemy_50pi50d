<script>
  let circle = false
  let x
  let y

  function handleClick(e) {
    x = e.clientX - e.target.offsetLeft
    y = e.clientY - e.target.offsetTop
    circle = true
    setTimeout(() => circle = false, 500)
  }
</script>

<style>
  button {
    background-color: purple;
    color: white;
    border: 1px solid purple;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px 30px;
    overflow: hidden;
    margin: 10px 0;
    position: relative;
  }

  button:focus {
    outline: none;
  }

  button .circle {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale .5s ease-out;
  }

  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
</style>

<button class="ripple" on:click={handleClick}>
  Click Me
  {#if circle}
    <span class="circle" style="top: {y}px; left: {x}px;"></span>
  {/if}
</button>
