<script>
  import { onMount } from 'svelte'

  import Note from './Note.svelte'
  let notes = []

  function updateLS() {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function addNewNote(text = '') {
    notes = [...notes, text]
    updateLS()
  }

  function deleteNote(event) {
    notes = notes.filter((note, idx) => idx !== event.detail)
    updateLS()
  }

  function updateNote(event) {
    notes[event.detail.idx] = event.detail.text
    updateLS()
  }

  onMount(() => {
    notes = JSON.parse(localStorage.getItem('notes')) || []
  })
</script>


{#each notes as note, idx}
  <Note idx={idx} text={note} on:delete={deleteNote} on:input={updateNote}/>
{/each}
<button class="add" id="add" on:click={() => addNewNote('')}>
  <i class="fas fa-plus"></i> Add note
</button>
