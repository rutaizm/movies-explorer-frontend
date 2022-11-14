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

    getMovies() {
        return fetch(`${this._url}`, {
          method:"GET",
          headers: {
              ...this._headers,
            //   Authorization: `Bearer ${token}`
              }
          })
          .then(this._handleError);
    }
}

const api = new Api({
    url:'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
}); 

export default api;