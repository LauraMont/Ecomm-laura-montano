import { useContext, useEffect, useState } from "react";
import {CartContext} from "./CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";

const Cart = ()=>{
    //Se obtiene el contenido de la variabe global
    const ctxItems = useContext(CartContext);
    const [totalCost , setTotalCost] = useState(0)
    const [isEmpty , setIsEmpty] = useState(true)
    useEffect(()=>{ 
        setTotalCost(ctxItems.CostTotal)
        setIsEmpty(ctxItems.ItemsTotal==0)
    }, [ctxItems])
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
                        isEmpty?
                        <h2 className="text-center mono-text">Your Shopping Cart is Empty</h2>
                        :ctxItems.cartList.map(item=> <ItemCart product={item} key={item.id}/>)
                        
                    }
                </div>
                <div className="col-3 mono-text SummaryCart m-4 row">
                    <h3 className="text-center mono-text py-3">ORDER SUMMARY</h3>
                    <p className="col-6">SubTotal:<br/>Taxes   :<br/>Discount:<br/><strong>Total:</strong></p>
                    <p className="col-6">${totalCost}<br/>${totalCost*0.05 }<br/>$-{totalCost*0.05 }<br/><strong>${totalCost}</strong> </p>
                    <div className="d-flex justify-content-center pb-3">
                        <button type="button" className="btn py-0 ">Checkout</button>
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default Cart;