function App() {
  return (
    <>
      <h1>todos</h1>
      <form action="" id="form">
        <input type="text" id="input" className="input" placeholder="Enter your todo" autoComplete="off"/>
        <ul id="todos" className="todos"/>
      </form>
      <small>Left click to toggle completed.<br />Right click to delete todo</small>
    </>
  )
}
export default App
