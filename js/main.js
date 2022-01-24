var elFilmList = document.querySelector('.films__list');
var elForm = document.querySelector('.films__form');
var elInputTitle = document.querySelector('.films__input--title');
var elInputPoster = document.querySelector('.films__input--poster');
var elInputDate = document.querySelector('.film__input--date');
var elOverview = document.querySelector('.films__overwiev');
var elInputGenres = document.querySelector('.films__genres');


function addNewFilm(title, poster, release_date, overview, genres, filmsArr){
    
var titleInputValue = title.value.trim();
var posterInputValue = poster.value.trim();
var dateInputValue = release_date.value.trim();
var overviewInputValue = overview.value.trim();
var genresInputValue = genres.value.trim().split(' ');

title.value = null;
    release_date.value = null;
    overview.value = null;
    genres.value = null;

var newFilm = {
    title: titleInputValue,
    poster: posterInputValue,
    release_date: dateInputValue,
    overview: overviewInputValue,
    genres: genresInputValue
}
filmsArr.unshift(newFilm)


}


function handleFormSubnit(evt){

    evt.preventDefault();

    

addNewFilm(elInputTitle,
    elInputPoster,
    elInputDate,
    elOverview,
    elInputGenres,
    films);

    renderingFilms(films)
}



elForm.addEventListener('submit', handleFormSubnit);


function normalizeDate(format){
    var filmDate = new Date(format);
    var day = String(filmDate.getDate()).padStart(2, 0);
    var month = String(filmDate.getMonth()+1).padStart(2, 0);
    var year = filmDate.getFullYear();

    return day + '.' + month + '.' + year
}




function renderingFilms(_films){

    elFilmList.innerHTML = null;

    for(var i = 0; i < _films.length; i++){

var newLi = document.createElement('li');
var newHeading = document.createElement('h3');
var newImage = document.createElement('img');
var newParagraph = document.createElement('p');
var newTime = document.createElement('time');
var newUl = document.createElement('ul');


// Set attributes

newLi.setAttribute('class', 'films__item col-lg-3 col-md-4 col-sm-5 text-center');
newHeading.setAttribute('class', 'films__heading');
newImage.setAttribute('class', 'films__poster w-100 h-auto rounded');
newImage.setAttribute('src', _films[i].poster);
newImage.setAttribute('alt', _films[i].title + ' poster');
newImage.setAttribute('width', 280);
newImage.setAttribute('height', 350);
newParagraph.setAttribute('class', 'films__overview');
newTime.setAttribute('class', 'films__time');
newUl.setAttribute('class', 'films-genres__list');

// Assign



newHeading.textContent = _films[i].title;
newParagraph.textContent = _films[i].overview;
newTime.textContent = normalizeDate(_films[i].release_date);



for (var j = 0; j<_films[i].genres.length; j++){
    var newGenreLi = document.createElement('li');
    newGenreLi.setAttribute('class', 'genre');
    newGenreLi.textContent = _films[i].genres[j];
    newUl.appendChild(newGenreLi)
}


// Appending

newLi.appendChild(newImage);
newLi.appendChild(newHeading);
newLi.appendChild(newTime);
newLi.appendChild(newParagraph);
newLi.appendChild(newUl);

elFilmList.appendChild(newLi)


    }
}

renderingFilms(films);


