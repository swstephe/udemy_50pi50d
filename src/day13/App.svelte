<script>
  import { onMount } from 'svelte'
  let textarea = ''       // bind to textarea value
  let tags = []           // list of tags

  function highlightRandom() {
    const idx = Math.floor(Math.random()*tags.length)
    tags[idx].highlight = true
    return idx
  }

  function randomSelect() {
    const times = 30
    const interval = setInterval(() => {
      const idx = highlightRandom()
      setTimeout(() => {
        tags[idx].highlight = false
      }, 100)
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      setTimeout(highlightRandom, 100)
    }, times*100)
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter') {
      setTimeout(() => {textarea = ''}, 10)
      randomSelect()
    } else {
      tags = textarea.split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
        .map(tag => { return {tag: tag, highlight: false}})
    }
  }

  onMount(() => document.getElementById('textarea').focus())
</script>

<style>
  h3 {
    color: #fff;
    margin: 10px 0 20px;
    text-align: center;
  }

  .container {
    width: 500px;
  }

  textarea {
    border: none;
    display: block;
    width: 100%;
    height: 100px;
    font-family: inherit;
    padding: 10px;
    margin: 0 0 20px;
    font-size: 16px;
  }

  .tag {
    background-color: #f0932b;
    color: #fff;
    border-radius: 50px;
    padding: 10px 20px;
    margin: 0 5px 10px 0;
    font-size: 14px;
    display: inline-block;
  }

  .tag.highlight {
    background-color: #273c75;
  }
</style>

<div class="container">
  <h3>Enter all of the choices divided by a comma (',').
    <br> Press Enter when you're done</h3>
  <textarea
      id="textarea"
      bind:value={textarea}
      placeholder="Enter choices here..."
      on:keyup={handleKeyUp}
  ></textarea>
  <div id="tags">
    {#each tags as tag,idx}
      <span class="tag" class:highlight={tag.highlight}>{tag.tag}</span>
    {/each}
  </div>
</div>
