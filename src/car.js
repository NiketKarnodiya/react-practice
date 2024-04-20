import React from "react";
 class car extends React.Component
 {
    constructor()
    {
        super()
    }
    render()
    {
        return <div>
            i am a car!
        </div>
    }
}
    
    class garage extends React.Component
    {
    render()
    {
        return <div>
            of ford garage
            <car/>
        </div>
    }
    }
 



export default car