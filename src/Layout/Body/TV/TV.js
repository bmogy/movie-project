import React, {Component} from "react";
import "../../../Styles/Style.css"
const TV = (props) =>{
return(
    <div>
        <input id="tvInput" onChange={props.inputHandler} placeholder="Please type a name of a TV show"></input>
        <div id="tvDiv"></div>
    </div>
) 
}
export default TV;