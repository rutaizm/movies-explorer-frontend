export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    searchMovies(token) {
        return fetch(`${this._url}/movies`, {
          method:"GET",
          headers: {
              ...this._headers,
              Authorization: `Bearer ${token}`
              }
          })
          .then(this._handleError);
    }

}