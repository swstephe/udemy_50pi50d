<script>
  import insects from './insects.json'

  let bugs = []

  let screen = 0
  let seconds = 0
  let score = 0
  let selected_insect

  $: time = Math.floor(seconds/60).toString().padStart(2, '0')
      + ":"
      + (seconds%60).toString().padStart(2, '0')


  function chooseInsect(idx) {
    selected_insect = insects[idx]
    screen = 2
    setTimeout(createInsect, 1000)
    startGame()
  }

  const getRandomLocation = () => {
    return {
      x: Math.random()*(window.innerWidth - 200) + 100,
      y: Math.random()*(window.innerHeight - 200) + 100
    }
  }

  function createInsect() {
    const bug = selected_insect
    const { x, y } = getRandomLocation()
    bug.style = `
    transform: rotate(${Math.random() * 360}deg);
    left: ${x}px;
    top: ${y}px;`
    bugs = [...bugs, bug]
  }

  function startGame() {
    setInterval(() => seconds++, 1000)
  }
</script>

<div class="screen" class:up={screen > 0}>
  <h1>Catch The Insect</h1>
  <button class="btn" id="start-btn" on:click={() => screen = 1}>
    Play Game
  </button>
</div>
<div class="screen" class:up={screen > 1}>
  <h1>What is your "favorite" insect</h1>
  <ul class="insects-list">
    {#each insects as insect, idx}
      <li>
        <button class="choose-insect-btn" on:click={() => chooseInsect(idx)}>
          <p>{insect.name}</p>
          <img src={insect.img} alt={insect.name.toLowerCase()}>
        </button>
      </li>
    {/each}
  </ul>
</div>
<div class="screen game-container" id="game-container">
  <h3 id="time" class="time">Time: {time}</h3>
  <h3 id="score" class="score">Score: {score}</h3>
  <h5 id="message" class="message">
    Are you annoyed yet?<br/>
    You are playing an impossible game!!
  </h5>
  {#each bugs as bug}
    <div class="insect">
      <img src={bug.img} alt={bug.name.toLower()} style={bug.style}>
    </div>
  {/each}
</div>
