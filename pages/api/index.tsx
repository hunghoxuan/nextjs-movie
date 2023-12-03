import axios from "axios";
require('dotenv').config();

const tmdbAPI = axios.create({
    baseURL: process.env.TMDB_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        api_key: process.env.TMDB_API_KEY,
        language: "en-US"
    }
});

export const fetchMovies = async (page: number) => {
    const { data } = await tmdbAPI.get(`/movie/popular`, { params: { page } });
    // console.log(data.results);
    return data.results;
}

export const fetchMovie = async (id: number) => {
    const { data } = await tmdbAPI.get(`/movie/${id}`);
    //console.log(data);
    return data;
}

