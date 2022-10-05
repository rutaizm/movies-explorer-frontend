export class Auth {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleError(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Возникла ошибка ${response.status}`);
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

    checkToken(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }            
        })        
        .then(this._handleError);
    }

    editProfileInfo(name, email, token) {
        return fetch(`${this._url}/users/me`, {
            method:"PATCH",
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({name:name, email:email}),
        })
        .then(this._handleError); 
    }
    
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
    
    saveMovie(film, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(film),
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
    url:'https://api.rutaizmDiploma.nomoredomains.sbs',
    headers: {
        'Content-Type': 'application/json'
    }
}); 

export default auth;