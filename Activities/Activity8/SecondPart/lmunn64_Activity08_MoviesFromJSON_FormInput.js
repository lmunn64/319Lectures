function getInputValue(){
let movieName = document.forms["my_form"]["inputMovieName"];
let inputMovieName = movieName.value;

fetch("../lmunn64_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
var mainContainer = document.getElementById("goodmovies");
mainContainer.innerHTML = "";
for(let i =0; i < myMovies.movies.length; i++){
    if (myMovies.movies[i].title === inputMovieName) {
    mainContainer.innerHTML += "<h3>" + myMovies.movies[i].title + "</h3>";
    mainContainer.innerHTML += "<h6>" + myMovies.movies[i].year + "</h6>";
    mainContainer.innerHTML += "<img id = 'img' src = " + myMovies.movies[i].url + ">";
    }
}
}
}