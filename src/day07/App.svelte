<script>
  let hoverLeft = false
  let hoverRight = false
</script>

<style>
  .btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    width: 15rem;
    padding: 1.5rem;
  }

  .split.left .btn:hover {
    background-color: var(--left-btn-hover-color);
    border-color: var(--left-btn-hover-color);
  }

  .split.right .btn:hover {
    background-color: var(--right-btn-hover-color);
    border-color: var(--right-btn-hover-color);
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #333;
  }

  .split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }

  .split.left {
    left: 0;
    background-image: url('ps.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .split.left::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--left-bg-color);
  }

  .split.right {
    right: 0;
    background-image: url('xbox.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .split.right::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--right-bg-color);
  }

  .split.right, .split.left, .split.right::before, .split.left::before {
    transition: all var(--speed) ease-in-out;
  }

  .hover-left .left {
    width: var(--hover-width);
  }

  .hover-left .right {
    width: var(--other-width);
  }

  .hover-right .right {
    width: var(--hover-width);
  }

  .hover-right .left {
    width: var(--other-width);
  }

@media(max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>

<div class="container" class:hover-left={hoverLeft} class:hover-right={hoverRight}>
  <div class="split left" on:mouseenter={() => hoverLeft=true} on:mouseleave={() => hoverLeft=false}>
    <h1>Playstation 5</h1>
    <a href="#" class="btn">Buy Now</a>
  </div>
  <div class="split right" on:mouseenter={() => hoverRight=true} on:mouseleave={() => hoverRight=false}>
    <h1>XBox Series X</h1>
    <a href="#" class="btn">Buy Now</a>
  </div>
</div>

