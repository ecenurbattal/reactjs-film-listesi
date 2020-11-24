import React, {useState} from 'react';
import MoviesList from './MoviesList/MoviesList';
import SearchBar from './SearchBar';

function FilterableMoviesList({movies}){
    const [term, setTerm] = useState('');
    const getFilteredMovies = () => {
        const filteredMovies = movies.filter(
            (movie) => movie.title.indexOf(term) !== -1
        );
        return filteredMovies;
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setTerm(value)
    }
    return(
        <>
            <SearchBar value={term} onChange={handleSearchChange}/>
            {getFilteredMovies().map((movie) => (
            <MoviesList movie={movie}/>
        ))}
        </>
    )
}

export default FilterableMoviesList;