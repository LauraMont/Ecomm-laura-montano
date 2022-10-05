import React, {createContext, useState } from "react"
import {Toasty} from "../utils/Notifications"
export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])
    //Funciones globales
    const addItem = (item, quantity)=>{ // agregar cierta cantidad de un ítem al carrito
        if(isInCart(item.id)){
            //Recorro la lista e incremento la cantidad de producto seleccionado
            let array = cartList.map(element=>(
                //Si el elemento no tiene ese id devuelve el mismo elemento 
                //De ser coincidir se envia el objeto con la cantidad incrementada
                (element.id!=item.id )? 
                element:
                {
                    id:element.id,
                    title:element.title,
                    category: element.category,
                    img : element.img,
                    stock:element.stock,
                    price:element.price,
                    fisicBook:element.fisicBook,
                    ebook:element.ebook,
                    description:element.description,
                    author:element.author,
                    quantity : element.quantity+quantity,
                    key:element.id
                }
            ))
            setCartList(array)
        }else{  
            item.quantity=quantity;
            setCartList([...cartList,item]);
        }
        Toasty("success",`Se agrego ${item.title} (${item.quantity})`)  
    }
    const removeItem = (itemId) =>{ // Remover un item del cart por usando su id
        const title = "se eliminó   de la lista de compra";
        setCartList(cartList.filter(item=> item.id !== itemId));
        Toasty("success",title)  
    }
    const clear = ()=>{ 
        setCartList([])
        Toasty("success","se borraron todos los items de la lista de compras")
    } // Remover todos los items
    const isInCart = (id) =>{
        return cartList.filter(item=> item.id == parseInt(id)).length > 0
    } //true|false
    
    const CostTotal = ()=>{
        let total = 0;
        if(cartList.length>0){
            let costos = cartList.map((item)=>(
                item.price*item.quantity
            ))
            total=costos.reduce((a, b)=>{ return a + b})
        }
        return total;
    }
    const ItemsTotal = ()=>{
        let items = 0;
        if(cartList.length >0 ){
            items = cartList.map((item)=>(
                item.quantity
            ))
            items.length==1 ? items = cartList[0].quantity
            :items = items.reduce((a, b)=>{ return a + b})
        }
        return items;
    }
    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart,CostTotal ,ItemsTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;