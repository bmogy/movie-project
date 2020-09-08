import React from "react"
import "../../../../Styles/Style.css"
const RenderMovieList = (event,api) => {

        //storing the event
        
        let searchField = event.target.value

        // storing the URL for searching movies
       const movieSearch = "https://api.themoviedb.org/3/search/movie?api_key=" + api + "&language=en-US&query=" + searchField +"&page=1&include_adult=false"
        // creating my promise    
       const promise = new Promise((resolve,reject)=>{
            const catchData =  fetch(movieSearch)
            resolve(catchData);
       })
       // converting the data to json data
       promise.then((response)=>response.json())
       //converting the data to a object
       .then((data)=>{
           console.log(data)
        // grabbed the div tag from the Movie.js
        const movieDiv = document.getElementById("movieDiv");
        movieDiv.innerHTML =""
       // movieDiv.innerHTML=""
       // create p tag for movie over view
        const movieOverView =document.createElement("p")
        movieOverView.innerHTML =""
        // create p tag for movie title
        const movieTilte = document.createElement("p")
        movieTilte.innerHTML =""
        const movieImage = document.createElement("img");
        const movieReleaseDate = document.createElement("p");
        // filter through the list of objects        
            let filteredMovieData = data.results.filter((movie)=>{
                    return  movie.title === searchField
            })
         

            // printing off the list of objects
            filteredMovieData.forEach((movie)=>{
                movieImage.setAttribute("src","https://image.tmdb.org/t/p/w300/" + movie.poster_path)
                movieImage.setAttribute("alt","Sorry, there are problems with the image")
                movieTilte.innerHTML="<Strong>Title: </Strong>" + movie.title
                movieOverView.innerHTML ="<Strong>Movie Overview: </Strong>" + movie.overview
                movieReleaseDate.innerHTML= "<Strong> Released: " +  movie.release_date+ "</Strong>"
                movieDiv.appendChild(movieTilte)
                movieDiv.appendChild(movieOverView)
                movieDiv.appendChild(movieImage)
                movieDiv.appendChild(movieReleaseDate)
                movieDiv.setAttribute("class","cardBody")
                console.log(movieTilte)
                console.log(movieOverView)
                new Promise((resolve,reject)=>{
                    const actorData = fetch("https://api.themoviedb.org/3/movie/"+ movie.id+"/credits?api_key=" + api)
                    resolve(actorData)
                }).then((response)=> response.json())
                .then((data)=>{
                    data.cast.forEach((data)=>{
                        const actorDiv = document.createElement("div")
                        actorDiv.setAttribute("class","actorCard")
                        const actorP = document.createElement("p");
                        const actorRole = document.createElement("p")
                        const actorPicture = document.createElement("img")
                        actorPicture.setAttribute("src","https://image.tmdb.org/t/p/w300/" + data.profile_path)
                        actorRole.innerHTML= "Role: " + data.character 
                        actorP.innerHTML = "Crew: " +  data.name
                      movieDiv.appendChild(actorDiv)
                        actorDiv.appendChild(actorP)
                        actorDiv.appendChild(actorRole)
                        actorDiv.appendChild(actorPicture)

                        console.log(data)
                    })
                })
            })
       
       })
    
}
export default RenderMovieList