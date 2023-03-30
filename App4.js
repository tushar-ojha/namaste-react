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


const RestaurantCard = () => {
    return (
        <div className="res-card">
             <div className="res-logo">
                <img src="https://thumbs.dreamstime.com/z/healthy-asian-food-stir-fry-vegetables-sesame-close-up-bowl-vertical-top-view-table-above-142520094.jpg"/>
            </div>
            <h3>Ojha Foods</h3>
            <h4>Cuisine: Russian</h4>
            <h4>Star Rating: 4</h4>
            <h4>Delivery time: 38 minutes</h4>
        </div>
    )
}
 
const Body = () => {
    return (
        <div className= "body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/><RestaurantCard/><RestaurantCard/>
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