import { FiBook , FiBookOpen,FiClipboard ,FiTag} from "react-icons/fi";
import { Link } from 'react-router-dom';

const Item = ({id,title,author,ebook,fisicBook, price,img})=>{
    let ebookClass ,fisicBookClass ;
    //Se definen si los iconos de ebook o book aparecen segun disponibilidad del libro (ebook:version digital , book:version fisica)
    ebook ? ebookClass = "text mono-text": ebookClass ="d-none";
    fisicBook ? fisicBookClass = "text mono-text": fisicBookClass ="d-none";
    
    let link = `/detail/${id}`
    return (
        <div className="cardProduct mx-5 mb-5">
            <div className="container">
                <a >
                    <img className="image" src={img} border="0"/>
                </a>
                <div className="middle">
                    <div className="text mono-text">
                        <Link to={link} className="text-decoration-none " >
                            <FiClipboard className="iconBooks"/> Details
                        </Link>
                    </div>
                    <div className={ebookClass}>
                        <FiBook className="iconBooks"/> EBook
                    </div>
                    <div className={fisicBookClass}>
                        <FiBookOpen className="iconBooks"/> Book
                    </div>
                    <div className="text ps-2">
                        <FiTag className="iconBooks"/> <strong className="ps-2">${price}</strong> 
                    </div>
                    
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-titlev  mono-text my-0 ms-3"><strong>{title}</strong></h5>
                <p className="card-text mono-text ms-3">{author}</p>
            </div>
        </div>
        
    )
}
export default Item;