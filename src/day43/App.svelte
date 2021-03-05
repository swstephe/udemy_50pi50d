<script>
  import ratings from './ratings.json'
  import Rating from './Rating.svelte'

  let selected = ratings.indexOf(rating => rating.text === 'Satisfied')
  let clicked = false
</script>

<div id="panel" class="panel-container">
  {#if clicked}
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br/>
    <strong> Feedback: {ratings[selected].text}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  {:else}
    <strong>How satisfied are you with our<br/>customer support performance?</strong>
    <div class="ratings-container">
      {#each ratings as rating, idx}
        <Rating rating={rating} on:click={()=>selected=idx}/>
      {/each}
    </div>
    <button class="btn" id="send" on:click={() => clicked = true}>Send Review</button>
  {/if}
</div>
