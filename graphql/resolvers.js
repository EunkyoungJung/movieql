// const resolvers = {
//     Query: {
//         person:() => nicolas
//     }
// };

import { people, getById } from "./db";
import { getMovies, addMovie, deleteMovie } from "./db";
const resolvers = {
    Query: {
        people: () => people,
        //person: () => getById(),
        //person: (_, { id }) => getById(id),
        //movies: () => getMovies(),
        movies: (_, { limit, rating}) => getMovies(limit, rating),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};
export default resolvers;

