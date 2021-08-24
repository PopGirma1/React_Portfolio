import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export const TheMoviedbApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
        sort_by: 'vote_average',
    },
});
