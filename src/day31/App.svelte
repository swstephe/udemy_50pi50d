<script>
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  let password = ''
  let length = 20

  const getRandomCharCode = (start, count) => String.fromCharCode(start + Math.floor(Math.random()*count))

  const types = [
    {
      id: 'lowercase',
      label: 'Include lowercase letters',
      checked: true,
      fn: () => getRandomCharCode(97, 26),
    },
    {
      id: 'uppercase',
      label: 'Include uppercase letters',
      checked: true,
      fn: () => getRandomCharCode(65, 26),
    },
    {
      id: 'numbera',
      label: 'Include numbers',
      checked: true,
      fn: () => getRandomCharCode(48, 10),
    },
    {
      id: 'symbols',
      label: 'Include symbols',
      checked: true,
      fn: () => symbols[Math.floor(Math.random() * symbols.length)]
    }
  ]

  function generatePassword() {
    const typesChecked = types.filter(type => type.checked)
    const typesCount = typesChecked.length
    if (typesCount === 0) {
      return ''
    }
    const randomType = () => typesChecked[Math.floor(Math.random()*typesChecked.length)]
    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      generatedPassword += randomType().fn()
    }
    password = generatedPassword
  }

  function copyToClipboard() {
    if (!password) {
      return
    }
    const textarea = document.createElement('textarea')
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
  }

</script>

<div class="container">
  <h2>Password Generator</h2>
  <div class="result-container">
    <span id="result">{password}</span>
    <button class="btn" id="clipboard" on:click={copyToClipboard}>
      <i class="far fa-clipboard"></i>
    </button>
  </div>
  <div class="settings">
    <div class="setting">
      <label for="length">Password Length</label>
      <input type="number" id="length" min="4" max="20" bind:value={length}>
    </div>
    {#each types as type}
      <div class="setting">
        <label for={type.id}>{type.label}</label>
        <input type="checkbox" id={type.id} bind:checked={type.checked}>
      </div>
    {/each}
  </div>
  <button class="btn btn-large" id="generate" on:click={generatePassword}>
    Generate Password
  </button>
</div>
