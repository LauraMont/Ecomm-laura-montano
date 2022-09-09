import Item from '../components/Item';

const ItemList =( {items})=> {
    return(
        <section className='d-flex flex-wrap justify-content-evenly'>
            {
                items.map(item=>(
                    <Item 
                    key={item.id}
                    id={item.id} 
                    title={item.title}
                    author={item.author}
                    ebook={item.ebook}
                    fisicBook={item.fisicBook}
                    price={item.price}
                    img={item.img}/>
                ))
            }
        </section>
    )
}

export default ItemList;