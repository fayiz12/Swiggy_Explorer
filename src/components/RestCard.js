import { CARD_URL } from "../../utils/constants";

const RestCard=(pp)=>{
    const {name,username,email}=pp
    return (
        <div className="res-card">
            <img className="res-logo" alt='reslogo' src={CARD_URL+"92c952"}></img>
            <h3>{name}</h3>
            <h4>{username}</h4>
            <h5>{email} ⭐</h5>
          
        </div>
    )
}

export default RestCard;