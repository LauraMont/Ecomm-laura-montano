import { useState ,useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../utils/fireBaseConfig';
import { doc, getDoc ,query} from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({});
    const {id} = useParams();

    useEffect(()=>{ 
        async function GetFBData(){
            const product = query(doc(db, "products",id))
            const docSnap = await getDoc(product);
            setData({...docSnap.data(),id:id})
        }
        GetFBData()
    }, [id]);
    return(
        <>
            <ItemDetail 
                item={data}
            /> 
        </>
    );
}
export default ItemDetailContainer;