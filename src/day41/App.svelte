<script>
  const codes = Array(6)

  function handleKeyDown(e, idx) {
    if (e.key >= '0' && e.key <= '9') {
      codes[idx].value = ''
      if (idx < codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 10)
      }
    } else if (e.key === 'Backspace') {
      if (idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 10)
      }
    }
  }
</script>

<div class="container">
  <h2>Verify Your Account</h2>
  <p>We emailed you the six digit code to
  cool_guy@email.com <br/> Enter the code below to
  confirm your email address.</p>
  <div class="code-container">
    {#each codes as code, idx}
      <input
        type="number"
        class="code"
        placeholder="0"
        min="0"
        max="9"
        required
        bind:this={code}
        on:keydown={(e) => handleKeyDown(e, idx)}
      >
    {/each}
  </div>
  <small class="info">
    This is design only.  We didn't actually send
    you an email as we don't have your email,
    right?
  </small>
</div>
