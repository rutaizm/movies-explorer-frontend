import React from "react";

function getShortMovies(arr) {
    const shortFilms = arr.filter(item => item.duration < 40);
    return shortFilms;        
}

function setLike(moviesForFilter, savedMovies) {
    return moviesForFilter.map(film => {
        let isLike = false
        let _id = null

        savedMovies.forEach(likedFilm => {
            isLike = film.id === likedFilm.movieId
            if (isLike) _id = likedFilm._id
        })        
        return { ...film, _id }
    });    
} 

function filterMovies(request, moviesArr) {    
        const filteredMovies = moviesArr.filter(item => item.nameRU.toLowerCase().includes(request.toLowerCase())); 
        return filteredMovies;                
}

export {getShortMovies, setLike, filterMovies}; 

