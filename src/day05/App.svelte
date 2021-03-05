<script>
  import {onMount} from 'svelte'
  let interval
  let load = 0

  function blurring() {
    load++
    if (load > 99) {
      clearInterval(interval)
    }
  }

  onMount(() => {
    interval = setInterval(blurring, 30)
  })
</script>

<style>
  .bg {
    background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80') no-repeat center center/cover;
    position: absolute;
    top: -30px;
    left: -30px;
    width: calc(100vw + 60px);
    height: calc(100vh + 60px);
    z-index: -1;
    filter: blur(0px);
  }

  .loading-text {
    font-size: 50px;
    color: #fff;
  }
</style>

<section class="bg" style="filter: blur({(-30 * load) / 100 + 30}px)"></section>
<div class="loading-text" style="opacity: {-load / 100 + 1}">{load}%</div>
