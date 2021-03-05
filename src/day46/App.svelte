<script>
  import questions from './questions.json'

  let current = 0
  let done = false
  let selected = null
  let score = 0

  function handleSubmit() {
    if (selected) {
      if (selected === questions[current].correct) {
        score++
      }

      current++
      selected = null
      done = current >= questions.length
    }
  }
</script>

<div class="quiz-container" id="quiz">
  {#if done}
    <h2>You answered correctly at {score}/{questions.length} questions</h2>
    <button on:click={()=>location.reload()}>Reload</button>
  {:else}
    <div class="quiz-header">
      <h2 id="question">{questions[current].question}</h2>
      <ul>
        {#each questions[current].answers as answer, idx}
          <li>
            <input
              type="radio"
              name="answer"
              id={"abcd".charAt(idx)}
              class="answer"
              bind:group={selected}
              value={idx}
            >
            <label for={"abcd".charAt(idx)}>{answer}</label>
          </li>
        {/each}
      </ul>
    </div>
    <button id="submit" on:click={handleSubmit}>Submit</button>
  {/if}
</div>
