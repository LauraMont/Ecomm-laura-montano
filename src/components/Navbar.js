import CartWidget from './CartWidget';

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