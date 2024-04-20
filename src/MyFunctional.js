import  {useState} from "react";
const MyFunctional=(props)=>
{


const[counter,setCounter]=useState(0) 


const updation=()=>
{
    setCounter(counter+2)
}
return <div>
     ohh! its a functional component
     and i use usestate hook to functional component to change state
     <br/>
     counter:{setCounter}
     <input type="button" onClick={updation}>update button</input>




</div>
}
export default MyFunctional
