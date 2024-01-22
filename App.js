import React from "react"
import ReactDOM  from "react-dom/client"


const Header=()=>{
    return (
        <div className="header">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        
    )
}

const Card=(pp)=>{
    const {name,cousins,urlId,starAvg}=pp
    return (
        <div className="res-card">
            <img className="res-logo" alt='reslogo' src={"https://via.placeholder.com/600/"+urlId}></img>
            <h3>{name}</h3>
            <h4>{cousins}</h4>
            <h5>{starAvg} ⭐</h5>
          
        </div>
    )
}

const dataList=[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "810b14",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "1ee8a4",
      "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "66b7d2",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
      "albumId": 1,
      "id": 20,
      "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
      "url": "8985dc",
      "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    }
]

const Body=()=>{
    return (
        <div>
            <h2>Search Bar</h2>
            {/* here the restraurant card */}
            <div className="res-container">
            {
                dataList.map((data)=><Card key={data.id} name={data.title} cousins={data.albumId} urlId={data.url} starAvg="3.8"/>)
            }

           
            </div>
        </div>
    )
}


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))

// this is how the functional component is rendered
root.render(<AppLayout/>)