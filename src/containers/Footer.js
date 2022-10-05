import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer className="p-3">
            <ul className="mono-text">
                <Link className="nav-link active" to='/home'>Home</Link>
                <Link className="nav-link active" to='/cart'>Shopping Cart</Link>
                <hr/>
                <Link className="nav-link active" to='/category/Novels'>Novels</Link>
                <Link className="nav-link active" to='/category/Classic'>Clasics</Link>
                <Link className="nav-link active" to='/category/RM_Collection'>RM Collection</Link>
                <Link className="nav-link active" to='/category/Movies_Based_In_Them'>Movies Based In Them</Link>
            </ul>
        </footer>
    )
}   

export default Footer;