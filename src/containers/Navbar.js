import CartWidget from '../components/CartWidget';
import { Link } from 'react-router-dom';
const NavBar = ()=>{
    return(
        <header className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Paradise Books</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/RMCollection'>RM Collection</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to='/Novels'>Novels</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to='/Clasics'>Clasics</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to='/MoviesBasedInThem'>Movies based in them</Link>
                        </li>
                    </ul>
                    <div>
                        <a className='icon' href='#'><CartWidget /></a>
                    </div>
                </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar