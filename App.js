import React from "react"
import ReactDOM  from "react-dom"


// this is the core react element
const content=React.createElement("h1",{id:"content"},"this is the content part")


// this is the react element using jsx
const heading1=<h1>hey there</h1>

const Heading=()=><h1>hey there its me functional component</h1>

//this is functional component in react
const Footer=()=>{
        return(
            <div>
                {/* this are the 3 ways to write functional component inside a functional component(component composition)*/}
                <Heading></Heading>
                <Heading/>
                {Heading()}
                 {/* this is how we can use react element inside a functional component*/}
                {content}
                <h2>hey i am footer</h2>
            </div>
        )
}

const element=(<div>
    <h1>i am element</h1>
    {/* element inside another element */}
    {heading1}
    {/* this is how a functional component is written inside a react element */}
    <Footer/>
</div>)


const root=ReactDOM.createRoot(document.getElementById('root'))

// this is how the functional component is rendered
root.render(element)