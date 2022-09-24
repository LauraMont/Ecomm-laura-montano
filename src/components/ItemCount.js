import {FiPlus, FiMinus} from "react-icons/fi";
import { useState } from "react";

const ItemCount = ({stock,initial, onAdd})=>{
    const [rate,setRate]= useState(parseInt(initial));
    //Incrementa la cantidad del producto en 1
    const HandlerAdd = ()=> {
        rate<stock && setRate(rate +1);
    }
    //Decrementa la cantidad del producto en 1
    const HandlerRest = ()=> {
        rate>initial && setRate(rate -1);
        
    }
    
    return(
        <div className="AddButtons d-flex flex-column align-items-center m-3">
            <div className="Buttons my-1 py-1">
                <a  onClick={()=>{HandlerRest()}}><FiMinus className="pdpBtns "/></a>
                <span>{rate}</span>
                <a  onClick={()=>{HandlerAdd()}}><FiPlus className="pdpBtns"/></a>
            </div>
            <div >
                <button type="button" className="btn py-0 " disabled={rate==0 && true} onClick={()=>{onAdd(rate)}}>Add to cart!</button>
            </div>
        </div>
    );

}

export default ItemCount