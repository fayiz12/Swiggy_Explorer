import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_MENU } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestraurantMenu=()=>{

    const [restmenu,setRestMenu]=useState(null)
    const {restId}=useParams()

    

    useEffect(()=>{
        fetched_data()
        
    },[])

    const fetched_data=async()=>{
        const responce=await fetch(MENU_API+restId);
        const json=await responce.json();
        setRestMenu(json.data)
        console.log(json.data)
    }
    if (restmenu==null){
        return <Shimmer/>
    }
    
    const {name,cuisines,avgRating,totalRatingsString}=restmenu.cards[0]?.card?.card?.info;
    const {itemCards}=restmenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    return (
        <div>
            <div className="singlePage">
                <div>
                    <h1>{name}</h1>
                    <h5>{cuisines.join(",")}</h5>
                </div>
                <div>
                    <h4>{avgRating}⭐️</h4>
                    <p>{totalRatingsString}</p>

                </div>
        
            </div>
            <div className="menu-decor">
                <h3>Menu</h3>
                <ul>
                    {
                        itemCards.map((item)=>{
                            return (
                                <div key={item?.card?.info?.id} className="menu-item">
                                    
                                    <div className="each-img">
                                        <h3>{item.card?.info?.name}</h3>
                                        <p>Rs:{item.card?.info?.price/100}</p>
                                        <img src={IMAGE_MENU+item?.card?.info?.imageId}></img>
                                    </div>
                                    <h4>{item?.card?.info?.description}</h4>
                                    

                                </div>
                        )})
                    }
                   

                </ul>
            </div>
            
        </div>
    )
}

export default RestraurantMenu;