import { useState } from 'react'

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className={`container ${showNav ? 'show-nav' : ''}`}>
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={() => setShowNav(false)}><i className="fas fa-times"/></button>
            <button id="open" onClick={() => setShowNav(true)}><i className="fas fa-bars"/></button>
          </div>
        </div>
        <div className="content">
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid animi assumenda consequuntur
            cupiditate debitis distinctio eaque eligendi esse eum exercitationem explicabo illum inventore itaque minus
            neque
            officiis pariatur, perspiciatis porro quae quod sapiente sunt voluptatum? Aspernatur autem fuga minus
            perspiciatis
            recusandae reprehenderit velit? Accusamus ad asperiores fugiat laudantium quae quidem tempore. Atque aut
            corporis
            delectus error, exercitationem ipsum modi molestias nam obcaecati optio quas, quia reiciendis similique. Animi
            eius in perferendis placeat. Aliquam amet blanditiis corporis cum distinctio, eos est eveniet facere, fugit
            labore
            molestias nisi perspiciatis possimus quo, quod rem tenetur ut vero voluptas voluptatum? Aperiam, dolorum,
            quo?</p>
          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
            consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
            totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas,
            ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident.
            Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><i className="fas fa-home"/> Home</li>
          <li><i className="fas fa-user-alt"/> About</li>
          <li><i className="fas fa-envelope"/> Contact</li>
        </ul>
      </nav>
    </>
)
}
export default App
