import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../utils/fireBaseConfig';
import ItemList from './ItemList'
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer= ()=>{
    const [data,setData]=useState([]);
    const {id} = useParams();
    useEffect(async()=>{ 
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.docs.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
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