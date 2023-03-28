// Starting Components!!!

// Majorly 2 types of components we have: Class (almost obsolete) and functional component!

import React from "react";
import ReactDOM from "react-dom/client";

// What is React functional component?
// It is just a normal JS function! hehehehehe!!!
// Let's prove it.

// const HeadingComponent = () => {

//     return <h1>Hello from HeadingComponent</h1>
// }


// Just leveraging arrow function. We can skip return keyword and braces if we just have one return statement in whole functon.
const HeadingComponent = () => (<h1>Hello from Heading "Component"</h1>)

const root = ReactDOM.createRoot(document.getElementById("root"));

const reactElement = <h1>I am a React Element</h1>

const NextComponent = () => (
    <div id="container">
        <HeadingComponent/>
        <h1>{console.log("JS inside JSX!")}</h1>
        <h1>Next Component</h1>
    </div>
)

const NewComponent = function (){
    return (
        <React.Fragment> 
            <div id="container">
            {HeadingComponent()}
            <HeadingComponent></HeadingComponent>
            <HeadingComponent/>
            {/* All above 3 things are one and same only */}
            {nextReactElement}
         <h1>Component through normal function NOT through arrow function</h1>
        </div>
        <div>
            <h4>New Div</h4>
        </div>
        </React.Fragment>
        // we can use <> and </> by virtue of JSX!
        
    )
}

const nextReactElement = (
    <span>
        {reactElement}
        I am next React Element
        <NewComponent/>
    </span>)


root.render(<NextComponent/>);   
//On encountering < and />, Babel will understand this is COMPONENT!

