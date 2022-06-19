import {getImageUrl} from "./MoviesUtils";

class Api {

  constructor(url, headerOptions) {
    this._url = url;
    this._headerOptions = headerOptions;
    this._queryParams = {
      credentials: 'include',
      headers: this._headerOptions,
    }
  }

  _getResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  fetchSavedMovies() {
    return fetch(`${this._url}/movies`, this._queryParams)
      .then(res => {
        return this._getResult(res)
      });
  }

  saveMovie(movie) {
    const queryParams = {
      ...this._queryParams,
      method: 'POST',
      body: JSON.stringify({
        country: movie.country || '',
        director: movie.director || '',
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: getImageUrl(movie.image.url),
        trailerLink: movie.trailerLink || 'https://www.youtube.com/',
        thumbnail: movie.trailerLink,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || '',
      })
    }
    return fetch(`${this._url}/movies`, queryParams)
      .then(res => {
        return this._getResult(res)
      });
  }

  removeMovie(id) {
    const queryParams = {
      ...this._queryParams,
      method: 'DELETE',
    }
    return fetch(`${this._url}/movies/${id}`, queryParams)
      .then(res => {
        return this._getResult(res)
      });
  }
}

export const projectApi = new Api('https://api.mymovie.nomoredomains.work', {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});
