import React from 'react';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';

// Hooks
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../hooks/useMovieFetch';

// Image
import NoImage from '../images/no-image.jpeg';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log(movie);

    return (
        <>
            <div>Movie</div>
        </>
    );
}

export default Movie;