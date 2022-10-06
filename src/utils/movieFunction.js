
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

function onSearch(request, moviesArr) {
    // if (request.length === 0) {
    //     return
    // } else {        
        
        const filteredMovies = moviesArr.filter(item => item.nameRU.toLowerCase().includes(request.toLowerCase())); 
       
        return filteredMovies;                
    //   }
}
function isChecked(request, moviesArr) {
    if (request.length === 0) {
        return
    } else {        
        getShortMovies(moviesArr);
        return moviesArr
 }
}

export {getShortMovies, setLike, onSearch, isChecked}; 

