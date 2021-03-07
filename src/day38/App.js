function App() {
  return (
    <div className="phone">
      <img
        src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
        alt="home" className="content show" />
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="work" className="content" />
      <img
        src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
        alt="blog" className="content" />
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        alt="about" className="content" />
      <nav>
        <ul>
          <li className="active">
            <i className="fas fa-home" />
            <p>Home</p>
          </li>
          <li>
            <i className="fas fa-box" />
            <p>Work</p>
          </li>
          <li>
            <i className="fas fa-book-open" />
            <p>Blog</p>
          </li>
          <li>
            <i className="fas fa-users" />
            <p>About Us</p>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default App;
