function App() {
  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <input id="email" type="text" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-control">
          <input id="password" type="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn">Login</button>
        <p className="text">Don't have an account? <a href="#">Register</a></p>
      </form>
    </div>
  )
}
export default App
