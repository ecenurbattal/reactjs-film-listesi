import React from 'react';
import MovieDescription from './MovieDescription';
import MovieTitles from './MovieTitles';

function MoviesList({movie}){
    return(
        <div className="movie-box">
            <MovieTitles movie={movie}/>
            <MovieDescription movie={movie}/>
        </div>
    )
}

export default MoviesList;