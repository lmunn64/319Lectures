
fetch("./lmunn64_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
var mainContainer = document.getElementById("goodmovies");
for(let i =0; i < myMovies.movies.length; i++){
    console.log(myMovies.movies[i].title);
}
}