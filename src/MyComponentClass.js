  import React from "react"

class MyComponentClass extends React.Component
{
    counter=0
    state={count:0}
    constructor(props)
    {
        console.log("constructor");
        super(props)
    }
    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps");
    }
    shouldComponentUpdate()
{
    console.log("should component update");
    return true
}
getSnapshotBeforeUpdate(prevstate,prevprops){
    console.log("getsnapshotbefore update");

    console.log("prevprops;",prevprops)
    console.log("prevprops;",prevprops)
    console.log("this.prevstate;",this.prevstate)
    console.log("this.prevprops;",this.prevprops)


    return true
}
    increment=()=>
    {
        this.setState({count:this.state.count+1})
        console.log("count: " , this.state.count)
        
    }
    incrementcounter=()=>
    {
        this.counter+=1
    }
    render()
    {
        console.log("render");
        console.log("class props:",this.props)
        return <div>hello react class Component!!

            color:<label style={{backgroundColor:this.props.color}}>
                {this.props.color}
                </label>
                <button onClick={this.props.onclick}>click me!</button>
                <div>
                    count:{this.state.count}
                    <button onClick={this.increment}>increment</button>
                </div>
                <div>
                    counter:{this.counter}
                    <button onClick={this.incrementcounter}>counter</button>
                </div>
        </div>
        
    }
    componentDidUpdate()
    {
        console.log("component did update");
    }
    componentDidMount()
    {
        console.log("component did mount");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
}
 export default MyComponentClass