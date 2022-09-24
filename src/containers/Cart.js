import { useContext } from "react";
import {CartContext} from "./CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";

const Cart = ()=>{
    //Se obtiene el contenido de la variabe global
    const ctxItems = useContext(CartContext);
    return(
        <main>
            <h1 className="text-center mono-text py-3 ">You are in the Shopping Cart</h1>
            <section className="row mx-0">
                <div className="col-12 row mono-text">
                    <Link to='/home' className="col-6 d-flex ">
                            <button type="button" className="btn py-0 " >Continue Shopping</button>
                    </Link>
                    <div className="col-6 justify-content-end">
                        <button type="button" className="btn py-0 " onClick={ctxItems.clear}>Delete All Products</button>
                    </div>
                </div>
                <div className="col-8 ">
                    {
                        //Se mapea el contenido y se imprime en la lista
                        ctxItems.cartList.map(item=> <ItemCart product={item} key={item.id}/>)
                    }
                </div>
                <div className="col-3 mono-text SummaryCart m-4 row">
                    <h3 className="text-center mono-text py-3">ORDER SUMMARY</h3>
                    <p className="col-6">SubTotal:<br/>Taxes   :<br/>Discount:<br/><strong>Total:</strong></p>
                    <p className="col-6">${ctxItems.totals}<br/>${ctxItems.totals*0.05 }<br/>${ctxItems.totals*0.05 }<br/><strong>${ctxItems.totals}</strong> </p>
                </div>
            </section>
            
        </main>
    )
}

export default Cart;