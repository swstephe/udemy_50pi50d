import Label from './Label'

function App() {
  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <input id="email" type="text" required />
          <Label htmlFor="email">Email</Label>
        </div>
        <div className="form-control">
          <input id="password" type="password" required />
          <Label htmlFor="password">Password</Label>
        </div>
        <button className="btn">Login</button>
        <p className="text">Don't have an account? <a href=".">Register</a></p>
      </form>
    </div>
  )
}
export default App
