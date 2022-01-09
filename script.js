'use strict'

const numberOfFilms = +prompt('Сколько фильмов в уже посмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}
const movie1 = prompt('Один из последних просмотренных фильмов?')
const rating1 = prompt('На сколько оцените его?')

const movie2 = prompt('Один из последних просмотренных фильмов?')
const rating2 = prompt('На сколько оцените его?')

personalMovieDB.movies[movie1] = rating1
personalMovieDB.movies[movie2] = rating2

console.log(personalMovieDB)