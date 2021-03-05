<script>
  const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']
  const types = ['info', 'success', 'error']
  let toasts

  const getRandom = (array) => array[Math.floor(Math.random()*array.length)]
  const getRandomMessage = () => getRandom(messages)
  const getRandomType = () => getRandom(types)

  function createNotification(message = null, type = null) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type : getRandomType())
    toast.innerText = message ? message : getRandomMessage()
    toasts.appendChild(toast)
    setTimeout(() => toast.remove(), 3000)
  }
</script>

<div bind:this={toasts} id="toasts"></div>
<button class="btn" id="button" on:click={() => createNotification()}>Show notification</button>
