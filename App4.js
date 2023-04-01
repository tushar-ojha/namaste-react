// Components in my Food Ordering App 
//     Header
//         -Logo
//         -NavItems
//     Body 
//         -Search 
//         -RestaurantContainer
//             -RestaurantCard
//                  -image
//                  - Name of restaurant. Rating, cuisine, delivery time.
//     Footer
//         -Copyright
//         -Links
//         -Address
//         -ContactInfo

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img  src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" className="logo" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>  
        </div>
    )
}



const RestaurantCard = (props) => {
   const {resData} = props;
   const {name, cuisine, avgRating, deliveryTime,costOfTwo} = resData?.data; 
//    Above thing is optional chaining!
    return (
        <div className="res-card">
             <div className="res-logo">
                <img src="https://thumbs.dreamstime.com/z/healthy-asian-food-stir-fry-vegetables-sesame-close-up-bowl-vertical-top-view-table-above-142520094.jpg"/>
            </div>
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>Rs{costOfTwo/100} minutes</h4>
        </div>
    )
}

const resList = [
    {data : {
        key: 1,
        name: "Ojha Foods",
        cuisine: ["Burger, Pizza, Russian, French"],
        avgRating: "5",
        deliveryTime: 10,
        costOfTwo: 40000
    }},

    {data : {
        key: 2,
        name: "Ojha Sweets",
        cuisine: ["Indian"],
        avgRating: "5",
        deliveryTime: 5,
        costOfTwo: 20000
    }},
    
]; //Let this is coming from some API.

 
const Body = () => {
    return (
        <div className= "body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant, index) => (<RestaurantCard key = {index} 
                    resData = {restaurant} />))
                }    
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);