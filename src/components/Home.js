import React, { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// API
import API from '../API';

// Image
import NoImage from '../images/no-image.jpeg';

const Home = () => {
    const { state, loading, error } = useHomeFetch();

    console.log(state);
    
    return <div>Home Page</div>
};

export default Home;