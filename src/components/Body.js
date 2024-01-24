import RestCard from "./RestCard";
import dataList from "../../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [datas,setDatas]=useState([])
    useEffect(()=>{fetched_data()},[])

    const fetched_data=async()=>{
        try {
            const fetched=await fetch("https://jsonplaceholder.typicode.com/users")
        const json=await fetched.json()
        console.log(json)
        setDatas(json)
        } catch (error) {
            console.log(error)
        } 
    }
   
    return datas.length===0 ? <Shimmer/> : (
        <div>
            {/* <h2>Search Bar</h2> */}
            <button onClick={()=>setDatas(datas.filter((data)=>data.username.length>8))}>Top Rated</button>
           

            {/* here the restraurant card */}
            <div className="res-container">
            {
                datas.map((data)=><RestCard key={data.id} name={data.name} username={data.username} email={data.email} />)
            }

           
            </div>
        </div>
    )
}

export default Body;