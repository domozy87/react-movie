import { useState, useEffect } from 'react';

import API from '../API';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( () => {
        const fetchMovie = async () => {
            try {
                setError(false);
                setLoading(true);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                // Get directors
                const directors = credits.crew.filter(
                    crew => crew.job === 'Director'
                );

                setState( {
                    ...movie,
                    actors: credits.cast,
                    directors
                } );

                setLoading(false);
            }
            catch(error) {
                setError(true);
            }
        };

        fetchMovie();
    }, [movieId] );

    return { state, loading, error };
};