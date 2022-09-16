import { FiBook , FiBookOpen,FiClipboard ,FiTag , FiShoppingBag} from "react-icons/fi";
import ItemCount from "./ItemCount";

const Handler = (count)=>{
    alert(`${count} products are added to your shopping cart`)
}

const ItemDetail = ({item})=>{
    //PDP de un libro 
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
                    <FiBook className="iconBooks "/> <strong className="ps-1 pe-2">EBook</strong>
                    <FiBookOpen className="iconBooks "/> <strong className="ps-1 px-2">Book</strong>
                    <FiTag className="iconBooks "/> <strong className="ps-1 pe-2">${item.price}</strong>
                    <FiShoppingBag className="iconBooks "/> <strong className="ps-1 pe-2">{item.stock}</strong>
                </div>
                <ItemCount 
                stock = {item.stock}
                initial = "1"
                onAdd = {Handler}
                />
            </div>
        </main>
    )
}
export default ItemDetail;