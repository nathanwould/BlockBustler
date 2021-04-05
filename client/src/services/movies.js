import api from './api-config';

export const getAllMovies = async () => {
  const resp = await api.get('/movies')
  return resp.data;
}

export const getOneMovie = async (id) => {
  const resp = await api.get(`/movies/${id}`);
  return resp.data;
}

export const postMovie = async (movieData) => {
  const resp = await api.post('/movies', movieData);
  return resp.data;
}

export const putMovie = async (id, movieData) => {
  const resp = await api.put(`/movies/${id}`, movieData);
  return resp.data
}

export const destroyMovie = async (id) => {
  const resp = await api.delete(`/movies/${id}`)
}

export const checkOut = async (id) => {
  const resp = await api.put(`/movies/${id}`)
}

export const returnMovie = async (id) => {
  const resp = await api.put(`/movies/${id}`)
}