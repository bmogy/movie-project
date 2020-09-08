import React from "react"
import "../../../../Styles/Style.css"
const TVFunctions = (event, apikey) => {
 //storing the event
        
 let searchField = event.target.value

 // storing the URL for searching movies
const tvSearch = "https://api.themoviedb.org/3/search/tv?api_key=" + apikey + "&language=en-US&query=" + searchField +"&page=1&include_adult=false"
 // creating my promise    
const promise = new Promise((resolve,reject)=>{
     const catchData =  fetch(tvSearch)
     resolve(catchData);
})
// converting the data to json data
promise.then((response)=>response.json())
//converting the data to a object
.then((data)=>{
    console.log(data)
 // grabbed the div tag from the Movie.js
 const tvDiv = document.getElementById("tvDiv");
 tvDiv.innerHTML =""
// movieDiv.innerHTML=""
// create p tag for movie over view
 const tvOverView =document.createElement("p")
 tvOverView.innerHTML =""
 // create p tag for movie title
 const tvTilte = document.createElement("p")
 tvTilte.innerHTML =""
 const tvImage = document.createElement("img");
 const tvReleaseDate = document.createElement("p");
 // filter through the list of objects        
     let filtereTVData = data.results.filter((tv)=>{
             return  tv.name === searchField
     })
  

     // printing off the list of objects
     filtereTVData.forEach((tv)=>{
         tvImage.setAttribute("src","https://image.tmdb.org/t/p/w300/" + tv.poster_path)
         tvImage.setAttribute("alt","Sorry, there are problems with the image")
         tvTilte.innerHTML="<Strong>Title: </Strong>" + tv.name
         tvOverView.innerHTML ="<Strong>Movie Overview: </Strong>" + tv.overview
         tvReleaseDate.innerHTML= "<Strong> Released: " +  tv.first_air_date+ "</Strong>"
         tvDiv.appendChild(tvTilte)
         tvDiv.appendChild(tvOverView)
         tvDiv.appendChild(tvImage)
         tvDiv.appendChild(tvReleaseDate)
         console.log(tvTilte)
         console.log(tvOverView)
         new Promise((resolve,reject)=>{
             const actorData = fetch("https://api.themoviedb.org/3/tv/"+ tv.id+"/credits?api_key=" + apikey)
             resolve(actorData)
         }).then((response)=> response.json())
         .then((data)=>{
             data.cast.forEach((data)=>{
                 const actorP = document.createElement("p");
                 const actorRole = document.createElement("p")
                 const actorPicture = document.createElement("img")
                 const actorDiv = document.createElement("div")
                 actorDiv.setAttribute("class","actorCard")
                 actorPicture.setAttribute("src","https://image.tmdb.org/t/p/w300/" + data.profile_path)
                 actorRole.innerHTML= "Role: " + data.character 
                 actorP.innerHTML = "Crew: " +  data.name
                 tvDiv.setAttribute("class","cardBody")
                 tvDiv.appendChild(actorDiv)
                 actorDiv.appendChild(actorP)
                 actorDiv.appendChild(actorRole)
                 actorDiv.appendChild(actorPicture)

                 console.log(data)
             })
         })
     })

})
}
export default TVFunctions