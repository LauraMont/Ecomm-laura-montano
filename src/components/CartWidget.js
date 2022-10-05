import { FiShoppingCart} from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import {CartContext} from "../containers/CartContext";

const CartWidget = ()=>{
    const ctxItems = useContext(CartContext);
    const [total,setTotal] = useState(0);
    useEffect(()=>{ 
        setTotal(ctxItems.ItemsTotal)       
    }, [ctxItems])
    return(
        <div className="d-flex">
            <FiShoppingCart className="react-icons"/>
            <div className={total==0? 'd-none':"circle mx-2"}>
                <p id="circle-content">{total}</p>
            </div>
        </div>
    )

};

export default CartWidget;