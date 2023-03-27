import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

// Code of Episode 1 and 2!

// Create h1 tag in React.
        // This createElement() takes 3 arguments. 1st one is the tag, 2nd an empty object and 3rd one is what we have to put in the tag.

// const heading = React.createElement("h1", {}, "Hello world from React!");

// const heading = React.createElement("h1", {
//     id: "heading",
//     random: "test"
// }, "Hello world from React!");

// // Creating nested HTML structure in React.

// // /* <div id= "parent">
// //     <div id = "child">
// //         <h1>Nested HTML structure</h1>
// //     </div>
// // </div> */

// const parent = React.createElement("div", 
// {id: "parent"},
// [React.createElement("div", {id: "child"},[
//     React.createElement("h1", {},"Nested HTML structure!!! Quite Nested!", ),
//     React.createElement("h2",{},"Sibling!")]),
//     React.createElement("div", {id: "child2"},[
//         React.createElement("h1", {},"Nested HTML structure!!! Quite Nested! Child2", ),
//         React.createElement("h2",{},"Sibling!!!!")])]); 


// console.log((heading)); //returns an React element. React element is just normal JS object. 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// //  
// root.render(parent);


// Code for Episode 3
// jsx!

const jsxHeading = ( <h1 id="heading" className ="heading">
        Namaste React using JSX</h1>);
console.log(jsxHeading);
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);