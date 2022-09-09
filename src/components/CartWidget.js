import { FiShoppingCart} from "react-icons/fi";

const CartWidget = ()=>{
    return(
        <div className="d-flex">
            <FiShoppingCart className="react-icons"/>
            <div className="circle mx-2">
                <p id="circle-content">1</p>
            </div>
        </div>
    )

};

export default CartWidget;