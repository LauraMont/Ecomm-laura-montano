import { useEffect, useState } from 'react';
import ItemCount from '../components/ItemCount';
import customFetch from '../utils/customFetch';
import ItemList from './ItemList'

const HandlerAddProducts = (rate)=>{
    if(rate > 0 ){
        alert(`se agregaron ${rate} al carrito`)
    }
}

const ItemListContainer= ()=>{
    const [data,setData]=useState([]);
    //ComponentDidMount
    useEffect(()=>{ //hook en react ,este gestiona el inicio de vida del componente
        customFetch()
        .then(result=> setData(result))
        .catch(err=> console.log(err))
    }, [])
    return(
        <main>
            <h2 className="text-center p-5 mono-text">Product List Page</h2>
            <ItemList 
                items={data} 
            />
            <ItemCount 
                stock="20" 
                initial ="1" 
                onAdd={HandlerAddProducts}
            />
        </main>
    )
}

export default ItemListContainer;