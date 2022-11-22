

'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');   
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count =  +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
    },    
    rememberMyFilms: function() {
        for (let i = 0; i < 2;) {
            let lastFilm = prompt('Один из последних просмотренных фильмов?', "").trim(),
                filmRating = prompt('На сколько оцените его?', '');
               
                if(lastFilm != "" && lastFilm != null && lastFilm.length < 50 &&
                    filmRating != "" && filmRating != null && filmRating.length < 50){
                    personalMovieDB.movies[lastFilm] = filmRating; 
                    i++;
                } else {
                   continue; }    
        }
        
    },    
    detectPersonalLevel: function() {
        if(personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if(personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if(!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {

        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            
            while(genre == "" || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            }

            personalMovieDB.genres[i] = genre;            
        }

        personalMovieDB.genres.forEach(function(element, i) {
            console.log(`Любимый жанр №  ${i + 1} - это ${element}`);
        });

    },
    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }

    },
};

    






