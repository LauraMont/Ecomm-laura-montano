import { useState ,useEffect} from 'react';
import customFetch from '../utils/customFetch';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({});
    //ComponentDidMount
    useEffect(()=>{ //hook en react ,este gestiona el inicio de vida del componente
        customFetch()
        .then(result=> setData(result[4]))
        .catch(err=> console.log(err))
    }, []);
    return(
        <>
            <ItemDetail 
                item={data}
            /> 
        </>
    );
}
export default ItemDetailContainer;