// // const nicolas = {
// //     name: "Nicolas",
// //     age: 10,
// //     gender: "female"
// // }

// export const people = [
//     {
//         id: 1,
//         name: "Nicolas",
//         age: 10,
//         gender: "female"
//     },
//     {
//         id: 2,
//         name: "Nicolas2",
//         age: 10,
//         gender: "female"
//     },
//     {
//         id: 3,
//         name: "Nicolas3",
//         age: 10,
//         gender: "female"
//     }
// ];

// export let movies = [
//     {
//         id: 1,
//         name: "movie1",
//         score: 1
//     },
//     {
//         id: 2,
//         name: "movie2",
//         score: 2
//     },
//     {
//         id: 3,
//         name: "movie3",
//         score: 3
//     },
//     {
//         id: 4,
//         name: "movie4",
//         score: 4
//     },
//     {
//         id: 5,
//         name: "movie5",
//         score: 5
//     }
// ]

// export const getById = id => {
//     // const filterPeople = people.filter(person => id === person.id);
//     // return filterPeople[0];
//     const filterMovies = movies.filter(movie => id === movie.id);
//     return filterMovies[0]
// }

// export const getMovies = () => movies;


// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanedMovies.length) {
//         movies = cleanedMovies;
//         return true;
//     }else{
//         return false;
//     }
// };

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: '${movies.length+1}',
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }

import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json"

// export const getMovies = (limit, rating) =>
//     fetch(`${API_URL}`)
//       .then(res => res.json())
//       .then(json => json.data.movies);

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `?limit=${limit}`;
    }
    if(limit > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
};

