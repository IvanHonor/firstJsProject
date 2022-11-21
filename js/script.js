/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}




function isOkAnswer(answer) {
    return answer != "" && answer != null && answer.length < 50;
}

function rememberMyFilms() {
    for (let i = 0; i < 2;) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', ""),
            filmRating = prompt('На сколько оцените его?', '');
           
            if(isOkAnswer(lastFilm) && isOkAnswer(filmRating)){
                personalMovieDB.movies[lastFilm] = filmRating; 
                i++;
            } else {
               continue; }    
    }
    
}

function detectPersonalLevel() {
    if(personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres[i] = genre;
        
    }
}

start();
    

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
    

    rememberMyFilms();

    detectPersonalLevel();

  



