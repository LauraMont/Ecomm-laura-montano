import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../utils/fireBaseConfig';
import ItemList from './ItemList'
import { collection, getDocs ,query ,where} from "firebase/firestore";

const ItemListContainer= ()=>{
    const [data,setData] = useState([]);
    const {id} = useParams();
    const [categoryText,setcategoryText] = useState("");
    useEffect(()=>{ 
        async function GetFBData(){
            let products ;
            if(id == undefined){
                products = collection(db, "products")
            }else{
                products = query(collection(db, "products"),where('category',"==",id))
            }
            const querySnapshot = await getDocs(products);
            const FireBaseData=querySnapshot.docs.map( item =>( {
                id: item.id,
                ...item.data()
            }))
            setData(FireBaseData)
        }
        GetFBData()
        getCategoryText()
    }, [id])

    function getCategoryText(){
        const text = id;
        id!=undefined ? setcategoryText(text.replace(/_/g, " "))
        : setcategoryText(" ")
    }
    return(
        <main>
            <h2 className="text-center p-5 mono-text">{categoryText}</h2>
            <ItemList 
                items={data} 
            />
        </main>
    )
}

export default ItemListContainer;