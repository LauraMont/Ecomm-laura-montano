import { useContext, useState } from "react";
import { FiBook , FiBookOpen ,FiTag , FiShoppingBag} from "react-icons/fi";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {CartContext} from "../containers/CartContext.js"

const ItemDetail = ({item ,ebook ,fisicBook})=>{
    const ctxItems = useContext(CartContext);
    const [Count,setCount]= useState(0);
    //PDP de un libro 
    const Handler = (count)=>{
        setCount(count);
        ctxItems.addItem(item, count);
    }
    return(
        <main className="row p-5 m-0">
            <div className="col-2 d-flex justify-content-center align-items-start  p-5 mx-5">
                <img className="pdpImage" src={item.img}/>
            </div>
            <div className="PdpBody col ms-5">
                <h2 className="mono-text"><strong>{item.title}</strong></h2>
                <p className="mono-text">{item.author}</p>
                <p className="mono-text fs-6">{item.description}</p>
                <div className=" iconsPDP mt-5 mb-2 p-1 d-flex align-items-center">
                    <FiBook className={fisicBook ==true? 'iconBooks':'d-none'}/> <strong className={fisicBook ==true? 'ps-1 px-2':'d-none'}>EBook</strong>
                    <FiBookOpen className={ebook ==true? 'iconBooks':'d-none' }/> <strong className={ebook ==true? 'iconBooks':'d-none'}>Book</strong>
                    <FiTag className="iconBooks "/> <strong className="ps-1 pe-2">${item.price}</strong>
                    <FiShoppingBag className="iconBooks "/> <strong className="ps-1 pe-2">{item.stock}</strong>
                </div>
                {
                    Count === 0 ?
                    <ItemCount 
                        stock = {item.stock}
                        initial = "0"
                        onAdd = {Handler}
                    />:
                    <Link className="p-4" to='/cart'>
                        <button type="button" className="btn py-0 " >Checkout</button>
                    </Link>
                }
            </div>
        </main>
    )
}
export default ItemDetail;