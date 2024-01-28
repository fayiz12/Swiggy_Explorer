import { Link } from "react-router-dom";
import { CARD_URL } from "../../utils/constants";

const RestCard=(pp)=>{
    const {name,avgRating,imgId,id,price}=pp
    return (
        <div className="res-card">
            <Link to={'/restraurants/'+id}>
                <img className="res-logo" alt='reslogo' src={CARD_URL+imgId}></img>
                <h3>{name}</h3>
                {/* <h4>{username}</h4> */}
            </Link>
           
            <div className="price-rating">
                <h5>{price}</h5>
                <h5>{avgRating} ⭐</h5>
            </div>
          
        </div>
    )
}

export default RestCard;