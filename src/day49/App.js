import classNames from 'classnames'
import { useEffect, useState } from 'react'

function App() {
  const lsKey = 'todos'
  const initial = JSON.parse(localStorage.getItem(lsKey) || '[]')
  const [todos, setTodos] = useState(initial)

  function todoAdd(text) {
    if (text) {
      const newTodos = [...todos]
      newTodos.push({ text, completed: false })
      setTodos(newTodos)
    }
  }

  function todoComplete(idx) {
    const newTodos = [...todos]
    newTodos[idx].completed = !newTodos[idx].completed
    setTodos(newTodos)
  }

  function todoRemove(idx) {
    const newTodos = [...todos]
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <h1>todos</h1>
      <form action="" id="form"
            onSubmit={(e) => {
              e.preventDefault()
              todoAdd(e.target.text.value)
              e.target.text.value = ''
            }}
      >
        <input
          type="text"
          id="input"
          name="text"
          className="input"
          placeholder="Enter your todo"
          autoComplete="off"
        />
        <ul id="todos" className="todos">
          {todos.map((todo, idx) => (
            <li
              key={idx}
              className={classNames({completed: todo.completed})}
              onContextMenu={(e) => {
                e.preventDefault()
                todoRemove(idx)
              }}
              onClick={() => todoComplete(idx)}
            >{todo.text}</li>
          ))}
        </ul>
      </form>
      <small>
        Left click to toggle completed.
        <br />
        Right click to delete todo
      </small>
    </>
  )
}
export default App
