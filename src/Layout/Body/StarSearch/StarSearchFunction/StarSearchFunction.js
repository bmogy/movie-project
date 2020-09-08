import React from "react"
import "../../../../Styles/Style.css"

const StarSearchRenderList = (event,apikey) => {
    let searchField = event.target.value
    // storing the URL for searching movies
    const personSearch = "https://api.themoviedb.org/3/search/person?api_key=" + apikey + "&language=en-US&query=" + searchField +"&page=1&include_adult=false"
    const promise = new Promise((resolve,reject)=>{
       const fetchStarData = fetch(personSearch)
        resolve(fetchStarData)
    })
    promise.then((data)=> data.json())
    .then((data)=>{
       const filterPerson =  data.results.filter((people)=>{
                return people.name === searchField
        })
        filterPerson.forEach((person)=>{
            const personSearchWithID = "https://api.themoviedb.org/3/person/"+ person.id+"?api_key="+ apikey+"&language=en-US"
           const secondPromise =  new Promise((resolve,reject)=>{
                    resolve(fetch(personSearchWithID))
            })
            secondPromise.then((data) => data.json())
            .then((data) => {
                const starSearchDiv = document.getElementById("startSearchDiv");
                starSearchDiv.innerHTML =""
                const pName = document.createElement("p"); 
                pName.innerHTML = "<strong> Name</strong>: " + data.name
                const pBiography = document.createElement("p"); 
                pBiography.innerHTML = "<strong>Description: </strong>" + data.biography
                const placeOfBirth = document.createElement("p");
                placeOfBirth.innerHTML = "<strong>Place of Birth: </strong>" + data.place_of_birth
                const starImage = document.createElement("img"); 
                starImage.setAttribute("src","https://image.tmdb.org/t/p/w300/" + data.profile_path)
                starSearchDiv.setAttribute("class","cardBody")
                starSearchDiv.appendChild(pName)
                starSearchDiv.appendChild(pBiography)
                starSearchDiv.appendChild(placeOfBirth)
                starSearchDiv.appendChild(starImage)

            })
        })

    })
}

export default StarSearchRenderList