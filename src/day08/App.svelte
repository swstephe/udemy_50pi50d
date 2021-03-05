<script>
  import WaveLabel from './WaveLabel.svelte'
</script>

<div class="container">
  <h1>Please Login</h1>
  <form>
    <div class="form-control">
      <input id="email" type="text" required>
      <WaveLabel _for="email">Email</WaveLabel>
    </div>
    <div class="form-control">
      <input id="password" type="password" required>
      <WaveLabel _for="password">Password</WaveLabel>
    </div>
    <button class="btn">Login</button>
    <p class="text">Don't have an account? <a href="#">Register</a> </p>
  </form>
</div>
