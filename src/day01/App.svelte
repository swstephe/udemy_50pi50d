<script>
  import Panel from './Panel.svelte'

  const data = [{
    img: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691',
    text: 'Explore The World'
  }, {
    img: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d',
    text: 'Wild Forest'
  }, {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    text: 'Sunny Beach'
  }, {
    img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9',
    text: 'City on Winter'
  }, {
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b',
    text: 'Mountains - Clouds'
  }]

  let activePanel = 0
</script>

<style>
  .container {
    display: flex;
    width: 90vw;
  }

  @media(max-width: 480px) {
    .container {
      width: 100vw;
    }
  }
</style>

<div class="container">
  {#each data as {img, text}, idx}
    <Panel
        img="{img}?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        text={text}
        active={activePanel === idx}
        on:click={() => activePanel = idx}
    />
  {/each}
</div>
