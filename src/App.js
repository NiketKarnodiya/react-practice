
import './App.css';
import MyComponent from './MyComponent.js';
import MyComponentClass from './MyComponentClass.js'
import MyFunctional from  './MyFunctional.js'
import React from 'react';


class App extends React.Component
{
  state={classComponent:< MyComponentClass color="red" onClick={()=>
  console.log("thhis is excuted")
}/>}

unmountFunction=()=>
{
  this.setState({classComponent:"class component unmount now"})
}
render(){
  return <div>
<p>unmounting</p>
<br/>
console.log("testing git commit");
{this.state.classComponent}
  
<MyComponent></MyComponent>
<MyFunctional></MyFunctional>
<br/>
<button onClick={this.unmountFunction}>unmount class component</button>
 </div>
}
}


export default App;
