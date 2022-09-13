/* import logo from './logo.svg';*/
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./containers/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter as Router ,Routes,Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path='/' element ={<ItemDetailContainer/>}/>
                    <Route path='categoy/:RMCollection' element ={<ItemDetailContainer/>}/>
                    //varia el texto con :
                </Routes>
                
                
            </Router>
        </>
    );
}
{/* <ItemListContainer />  */}
export default App;
