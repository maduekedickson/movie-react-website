import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const searchMovies = async (query) => {
  const response = await api.get('/search/movie', {
    params: { query, include_adult: false, language: 'en-US', page: 1 },
  })
  return response.data.results
}

export const fetchTrending = async () => {
  const response = await api.get('/trending/movie/week', {
    params: { language: 'en-US' },
  })
  return response.data.results
}

export const fetchPopular = async () => {
  const response = await api.get('/movie/popular', {
    params: { language: 'en-US', page: 1 },
  })
  return response.data.results
}

export const fetchMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`, {
    params: { language: 'en-US' },
  })
  return response.data
}

export const getPosterUrl = (path, size = 'w342') => {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : null
}
