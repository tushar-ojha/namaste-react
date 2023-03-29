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
            <h3>Ojha Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className= "body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
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