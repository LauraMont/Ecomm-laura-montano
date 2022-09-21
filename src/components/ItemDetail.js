import { useState } from "react";
import { FiBook , FiBookOpen,FiClipboard ,FiTag , FiShoppingBag} from "react-icons/fi";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({item ,ebook ,fisicBook})=>{
    let ebookClass ,fisicBookClass ,ebookText , fisicBookText;
    //Se definen si los iconos de ebook o book aparecen segun disponibilidad del libro (ebook:version digital , book:version fisica)
    if(ebook){
        ebookClass = "iconBooks";
        ebookText = "ps-1 px-2";
    }else{
        ebookClass ="d-none";
        ebookText ="d-none";
    } 
    if(fisicBook){
        fisicBookClass = "iconBooks";
        fisicBookText = "ps-1 pe-2";
    }else{
        fisicBookClass ="d-none";
        fisicBookText ="d-none";
    } 

    const [Count,setCount]= useState(0);
    //PDP de un libro 
    const Handler = (count)=>{
        alert(`${count} products are added to your shopping cart`);
        setCount(count);
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
                <div className=" iconsPDP mt-5 p-1 d-flex align-items-center">
                    <FiBook className={fisicBookClass}/> <strong className={fisicBookText}>EBook</strong>
                    <FiBookOpen className={ebookClass}/> <strong className={ebookText}>Book</strong>
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
                    <Link to='/cart'>
                        <button type="button" className="btn py-0 " >Checkout</button>
                    </Link>
                }
            </div>
        </main>
    )
}
export default ItemDetail;