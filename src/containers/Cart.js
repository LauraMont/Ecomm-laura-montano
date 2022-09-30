import { useContext, useEffect, useState } from "react";
import {CartContext} from "./CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";
import {doc, setDoc ,serverTimestamp, collection ,updateDoc, increment } from "firebase/firestore";
import db from "../utils/fireBaseConfig";

const Cart = ()=>{
    //Se obtiene el contenido de la variabe global
    const ctxItems = useContext(CartContext);
    const [totalCost , setTotalCost] = useState(0)
    const [isEmpty , setIsEmpty] = useState(true)

    useEffect(()=>{ 
        setTotalCost(ctxItems.CostTotal)
        setIsEmpty(ctxItems.ItemsTotal==0)
    }, [ctxItems])

    const createOrder = async()=>{
        let order = {
            buyer: { 
                name: "laura", 
                phone: "1235468258", 
                email :"laura@gmail.com"
            }, 
            items:ctxItems.cartList.map((item)=>({
                id: item.id,
                title:item.title,
                price : item.price,
                quantity: item.quantity
            })), 
            date: serverTimestamp(), 
            total:ctxItems.CostTotal()  
        }
        console.log(order)

        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)
        
        ctxItems.cartList.forEach(async(item) => {
            const washingtonRef = doc(db, "products", item.id);
            await updateDoc(washingtonRef, {
                stock: increment(-item.quantity)
            });
        });
        ctxItems.clear()
        alert("Your order has been created \n This is your ID's order: " + newOrderRef.id)


    }
    
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
                        <button type="button" className="btn py-0" onClick={createOrder}>Checkout</button>
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default Cart;