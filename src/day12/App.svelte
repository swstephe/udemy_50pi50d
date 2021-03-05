<script>
  import Faq from './Faq.svelte'
  import questions from './questions.json'
</script>

<style>
  h1 {
    margin: 50px 0 30px;
    text-align: center;
  }

  .faq-container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<h1>Frequently Asked Questions</h1>
<div class="faq-container">
  {#each questions as {q, a}, idx}
    <Faq open={idx === 0} question={q} answer={a}/>
  {/each}
</div>
