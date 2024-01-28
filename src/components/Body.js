import RestCard from "./RestCard";
import dataList from "../../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [datas,setDatas]=useState([])
    
    useEffect(()=>{fetched_data()},[])

    const fetched_data=async()=>{
        try {
            const fetched=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTIP_WEB_LISTING")
        const json=await fetched.json()
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setDatas(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilter(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        } catch (error) {
            console.log(error)
        } 
    }
    const [search,setSearch]=useState("")
    const [filter,setFilter]=useState()
   
    return datas.length===0 ? <Shimmer/> : (
        <div>
            <div className="filter-ui">
                <div className="search-ui">
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                    <button onClick={()=>setFilter(datas.filter((item)=>item.info.name.toLowerCase().includes(search.toLowerCase())))}>search</button>
                </div>
                
                <button onClick={()=>setFilter(datas.filter((data)=>data.info.avgRating>4.4))}>Top Rated</button>

            </div>
           

            {/* here the restraurant card */}
            <div className="res-container">
            {
                filter.map((data)=><RestCard key={data.info.id} price={data.info.costForTwo} cuisines={data.info.cuisines} id={data.info.id}  name={data.info.name} avgRating={data.info.avgRating} imgId={data.info.cloudinaryImageId}/>)
            }

           
            </div>
        </div>
    )
}

export default Body;