import { useState } from "react"

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState("")

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: Math.random() > 0.5,
    })

    setNewNote("")
  }

  return (
    <div className="formDiv">
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleChange}
          placeholder="write note content here"
        />
        <input
          value={catbat}
          onChange={batcat}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

let catbat = 8
let batcat = 9

export default NoteForm