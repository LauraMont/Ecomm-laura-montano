import React, {createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])
    const [totals , settotals] = useState(0)
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
            console.log(array)
            setCartList(array)
        }else{  
            item.quantity=quantity;
            setCartList([...cartList,item]);
        }
        costTotal([...cartList,item])
    }
    const removeItem = (itemId) =>{ // Remover un item del cart por usando su id
        setCartList(cartList.filter(item=> item.id !== itemId));
        costTotal(cartList.filter(item=> item.id !== itemId))
    }
    const clear = ()=>{ setCartList([])} // Remover todos los items
    const isInCart = (id) =>{
        return cartList.filter(item=> item.id == parseInt(id)).length > 0
    } //true|false
    const costTotal = (list)=>{
        console.log(list)
        if(list.length>0){
            let costos = list.map((item)=>(
                item.price*item.quantity
            ))
            settotals( costos.reduce((a, b)=>{ return a + b}))
        }else{
            settotals(0)
        }
    }
    return(
        <CartContext.Provider value={{cartList,totals, addItem, removeItem, clear, isInCart ,costTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;