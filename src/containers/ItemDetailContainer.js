import { useState ,useEffect} from 'react';
import customFetch from '../utils/customFetch';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{ 
        //muestra el producto que coincide con el id (en este caso es un entero)
        customFetch()
            .then(result=> setData(result.find(item=> item.id === parseInt(id))))
            .catch(err=> console.log(err))
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