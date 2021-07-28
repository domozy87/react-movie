import React from 'react';

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

// Components
import Thumb from '../Thumb';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Image
import NoImage from '../../images/no-image.jpeg';

const MovieInfo = ( { movie } ) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
                }
                clickable={false}
                movieId={movie.id}
                alt='movie.title'
            />
        </Content>
    </Wrapper>
);

export default MovieInfo;