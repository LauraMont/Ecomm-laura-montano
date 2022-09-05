import ItemCount from './ItemCount';

const HandlerAddProducts = (rate)=>{
    if(rate > 0 ){
        alert(`se agregaron ${rate} al carrito`)
    }
}

const ItemListContainer= ()=>{
        return(
            <main>
                <h2 className="text-center pt-5">Product List Page</h2>
                <ItemCount 
                stock="20" 
                initial ="1" 
                onAdd={HandlerAddProducts}/>
            </main>
        )
}

export default ItemListContainer;