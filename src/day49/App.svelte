<script>
  import { onMount } from 'svelte'

  let todos = []
  let todoText = ''

  const store = () => localStorage.setItem('todos', JSON.stringify(todos))

  function remove(idx) {
    todos = [...todos.slice(0, idx), ...todos.slice(idx + 1)]
    store()
  }

  function complete(idx) {
    todos[idx].completed = !todos[idx].completed
    store()
  }

  function submit(e) {
    e.preventDefault()
    if (todoText) {
      todos = [...todos, { text: todoText, completed: false }]
      todoText = ''
      store()
    }
  }

  onMount(() => {
    todos = JSON.parse(localStorage.getItem('todos'))
  })
</script>


<h1>todos</h1>
<form action="" id="form" on:submit={submit}>
  <input
    type="text"
    id="input"
    class="input"
    placeholder="Enter your todo"
    autocomplete="off"
    bind:value={todoText}
  >
  <ul id="todos" class="todos">
    {#each todos as todo, idx}
      <li
        class:completed={todo.completed}
        on:contextmenu={(e) => {
          e.preventDefault()
          remove(idx)
        }}
        on:click={() => complete(idx)}
      >
        {todo.text}
      </li>
    {/each}
  </ul>
</form>
<small>Left click to toggle completed.<br/>Right click to delete todo</small>
