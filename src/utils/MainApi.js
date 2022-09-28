export class Auth {
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

    register (name, password, email) {
        return fetch(`${this._url}/signup`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({name:name, password:password, email:email})
        })
        .then(this._handleError);
    } 

    login (password, email) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({password:password, email:email})
        })
        .then(this._handleError);
    }  

    // checkToken (token) {
    //     return fetch(`${this._url}/me`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`,
    //         }
    //     })        
    //     .then(this._handleError);
    // }

    getSavedMovies(token) {
        return fetch(`${this._url}/movies`, {
          method:"GET",
          headers: {
              ...this._headers,
              Authorization: `Bearer ${token}`
              }
        })
        .then(this._handleError);
    }

    
    getProfileInfo(token) {
        return fetch(`${this._url}/me`, {
            method:"GET",
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
        })
        .then(this._handleError); 
    }

    editProfileInfo({name, email}, token) {
        return fetch(`${this._url}/me`, {
            method:"PATCH",
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({name:name, email:email}),
        })
        .then(this._handleError); 
    }
    
    saveMovie(token) {
        return fetch(`${this._url}/`, {
            method: 'POST',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._handleError);
    }
    
    deleteMovie(_id, token) {
        return fetch(`${this._url}/movies/${_id}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._handleError);
    }   

}

const auth = new Auth({
    BASE_URL:'https://api.rutaizmDiploma.nomoredomains.sbs',
    headers: {
        'Content-Type': 'application/json'
    }
}); 

export default auth;