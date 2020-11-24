import React from 'react';

function MovieTitles({movie}) {
    return(
            <div className="title">
                {movie.title}
            </div>
    )
}

export default MovieTitles;
