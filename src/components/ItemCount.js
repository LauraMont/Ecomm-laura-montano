import {FiPlus, FiMinus} from "react-icons/fi";
import { useState } from "react";

const ItemCount = ({stock,initial, onAdd})=>{
    const [rate,setRate]= useState(parseInt(initial));//hook
    const HandlerAdd = ()=> {
        rate<stock && setRate(rate +1);
    }
    const HandlerRest = ()=> {
        rate>initial && setRate(rate -1);
        
    }
    
    return(
        <div className="AddButtons d-flex flex-column align-items-center m-3">
            <div className="Buttons my-1 py-1">
                <a href="#" onClick={()=>{HandlerRest()}}><FiMinus className="pdpBtns"/></a>
                <span>{rate}</span>
                <a href="#" onClick={()=>{HandlerAdd()}}><FiPlus className="pdpBtns"/></a>
            </div>
            <div >
                <button type="button" className="btn py-0 " onClick={()=>{onAdd(rate)}}>Add to cart!</button>
            </div>
        </div>
    );

}

export default ItemCount