const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

function stopAll() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound)
    audio.pause()
    audio.currentTime = 0
  })
}

function play(sound) {
  stopAll()
  document.getElementById(sound).play()
}

function App() {
  return (
    <>
      {sounds.map((sound, idx) => (
        <audio key={'audio.' + idx} id={sound} src={`/sounds/${sound}.mp3`} />
      ))}
      <div id="buttons">
        {sounds.map((sound, idx) => (
          <button key={'button.' + idx} className='btn' onClick={() => play(sound)}>
            {sound}
          </button>
        ))}
      </div>
    </>
  )
}
export default App
