<script>
  import AudioButton from './AudioButton.svelte'

  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
  let current = null

  function play(audio) {
    if (current !== null) {
      current.pause()
      current.currentTime = 0
    }
    current = audio.detail
  }

</script>

<div id="buttons">
  {#each sounds as sound}
    <AudioButton sound={sound} on:play={play}/>
  {/each}
</div>
