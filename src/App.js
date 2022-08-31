/* import logo from './logo.svg';*/
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Paradise Books</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">RM Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Novels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Clasics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Movies based in them</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default App;
