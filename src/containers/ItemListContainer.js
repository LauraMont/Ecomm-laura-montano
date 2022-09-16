import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import customFetch from '../utils/customFetch';
import ItemList from './ItemList'

const ItemListContainer= ()=>{
    const [data,setData]=useState([]);
    const {id} = useParams();
    useEffect(()=>{ 
        if(id){
            //muestra los productos de la categoria id
            customFetch()
                .then(result=> setData(result.filter(item=> item.category == id)))
                .catch(err=> console.log(err))
        }else{ //id=undefined
            //muestra todos los productos
            customFetch()
                .then(result=> setData(result))
                .catch(err=> console.log(err))
        }
    }, [id])
    return(
        <main>
            <h2 className="text-center p-5 mono-text">Product List Page</h2>
            <ItemList 
                items={data} 
            />
        </main>
    )
}

export default ItemListContainer;