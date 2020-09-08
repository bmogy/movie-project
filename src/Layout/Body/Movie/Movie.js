import React from "react";
import "../../../Styles/Style.css"

const Movie = (props,t) => {
    return (
        <div>
         
            <input id="movie" type="text" placeholder="Please type a name of a movie" onChange={props.inputHandler}></input>
             <div id="movieDiv"></div>
        </div>
    )
}
export default Movie