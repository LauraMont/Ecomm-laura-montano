import { FiBook , FiBookOpen,FiClipboard ,FiTag} from "react-icons/fi";
import { Link } from 'react-router-dom';

const Item = ({id,title,author,ebook,fisicBook, price,img})=>{
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
                    <div className={ebook==true ? "text mono-text": "d-none"}>
                        <FiBook className="iconBooks"/> EBook
                    </div>
                    <div className={fisicBook==true ? "text mono-text": "d-none"}>
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