import { useState } from "react"

 const MyComponent=(props)=>
 {
    const [Counter,setCounter]=useState(1)
    const[MyString,setMyString]=useState("Default")
    const[Object,setObject]=useState({
        key1:"this is my value",
        key2:2,
        key3:true,
        key4:[{}]
    })
     const incrementCounter=()=>
     {
        setCounter(Counter+1)
     }
    return <div>
        <h1>Functional Component</h1>
        Hello React!!
        <br/>
        counter:{Counter}
        <button onClick={incrementCounter}>update counter</button>
        <br/>
        <button></button>
    </div>      
 }
 export default MyComponent
