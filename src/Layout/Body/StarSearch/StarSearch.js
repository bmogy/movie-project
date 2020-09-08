import React from "react"
import "../../../Styles/Style.css"

const StarSearch = (props) => {
    return (
        <div>
            <input type="text" onChange={props.inputHandler} placeholder="Please type a name of a Celebrity"></input>
            <div id="startSearchDiv">

            </div>
        </div>
      
    )
}

export default StarSearch