/* import logo from './logo.svg';*/
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./containers/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Cart from "./containers/Cart";
import CartContextProvider from "./containers/CartContext";
import "./App.css";
import Item from "./components/Item";

function App() {
    return (
        <>
            <CartContextProvider>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route exact path='/' element ={<ItemListContainer/>}/>
                        <Route exact path='/Home' element ={<ItemListContainer/>}/>
                        <Route exact path='category/:id' element ={<ItemListContainer/>}/>
                        <Route exact path='detail/:id' element ={<ItemDetailContainer/>}/>
                        <Route exact path='cart' element ={<Cart/>} key={Item.id}/>
                        //varia el texto con :
                    </Routes>
                </Router>
            </CartContextProvider>
        </>
    );
}
{/* <ItemListContainer />  */}
export default App;
