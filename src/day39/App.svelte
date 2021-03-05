<script>
  let blurValue

  function handleInput(e) {
    const length = e.target.value.length
    blurValue = 20 > length*2 ? 20 - length*2 : 0
  }
</script>

<div class="background" style="filter: blur({blurValue}px);">
</div>
<div class="bg-white rounded p-10 text-center shadow-md">
  <h1 class="text-3xl">Image Password Strength</h1>
  <p class="text-sm text-gray-700">Change the password to see the effect</p>
  <div class="my-4 text-left">
    <label for="email" class="text-gray-900">Email</label>
    <input
      type="email"
      id="email"
      class="border block w-full p-2 mt-2 rounded"
      placeholder="Enter Email"
    >
  </div>
  <div class="my-4 text-left">
    <label for="password" class="text-gray-900">Password</label>
    <input
      type="password"
      id="password"
      class="border block w-full p-2 mt-2 rounded"
      placeholder="Enter Password"
      on:input={handleInput}
    >
  </div>
  <button
    class="bg-black text-white py-2 mt-4 inline-block w-full rounded"
    type="submit"
  >Submit</button>
</div>
