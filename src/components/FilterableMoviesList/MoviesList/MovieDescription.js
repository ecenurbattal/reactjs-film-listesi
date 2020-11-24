import React from 'react';

function MovieDescription({movie}) {
    return(
        <div className="description">
            {movie.description}
        </div>
    )
}

export default MovieDescription;