import { useEffect, useState } from 'react'
import Note from './Note'

function App() {
  const _notes = JSON.parse(localStorage.getItem('notes') || '[]')
  const [notes, setNotes] = useState(_notes)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function addNote() {
    setNotes([...notes, ''])
  }

  function setNote(idx, text) {
    setNotes([...notes.slice(0, idx), text, ...notes.slice(idx + 1)])
  }

  function deleteNote(idx) {
    const newNotes = [...notes]
    newNotes.splice(idx, 1)
    setNotes(newNotes)
  }

  return (
    <>
      {notes.map((note, idx) => (
        <Note key={idx} text={note}
          setText={text => setNote(idx, text)}
          onDelete={() => deleteNote(idx)}
        />
      ))}
      <button className="add" id="add" onClick={() => addNote()}>
        <i className="fas fa-plus"/> Add note
      </button>
    </>
  )
}

export default App
