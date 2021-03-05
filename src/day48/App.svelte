<script>
  const unsplashURL = 'https://source.unsplash.com/random/'
  const rows = 10
  const getRandomNr = () => Math.floor(Math.random()*10) + 300
  const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`
</script>

<h1 class="title">Random Image Feed</h1>
<div class="container">
  {#each Array(rows*3) as _}
    <img src={unsplashURL + getRandomSize()} alt="">
  {/each}
</div>
