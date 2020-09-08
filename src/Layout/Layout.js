import React, {Component} from "react";
import Header from "./Header/Header"
import Movie from "./Body/Movie/Movie"
import TV from "./Body/TV/TV"
import StarSearch from "./Body/StarSearch/StarSearch"
import StarSearchFunction from "./Body/StarSearch/StarSearchFunction/StarSearchFunction"
import RenderList from "./Body/Movie/MovieFunctions/MovieFunctions"
import TVRenderList from "./Body/TV/TVFunctions/TVFunctions"
import Footer from "./Footer/Footer"
class Layout extends Component{
    // creatong the states
    state = {
        apiKey:"b2f49c297ee42a377615666c4da25acf",
        storedDate:[]
    }
    // creating input hnadler function where it will pull from the movie dba apt anytime someone types something
    inputHandler =  (event) => {

        RenderList(event, this.state.apiKey)
    }
    TVInputHandler= (event) => {
 
        TVRenderList(event, this.state.apiKey)
    }
    startSearch = (event) => {
        StarSearchFunction(event,this.state.apiKey)
    }
    render(){
        return (
            <div>
            <Header></Header>
            <Movie inputHandler={this.inputHandler}></Movie>
            <TV inputHandler={this.TVInputHandler}></TV>
            <StarSearch inputHandler={this.startSearch}></StarSearch>
            <Footer></Footer>

        
            </div>
        )
    }
}
export default Layout