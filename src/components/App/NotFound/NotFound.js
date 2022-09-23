import './NotFound.css';

function NotFound() {
    return (
            <div className="not-found">
                <h2 className="not-found__error">404</h2>
                <p className="not-found__text">Страница не найдена</p>
                <button className="not-found__back-button">Назад</button>
            </div>            
    )
}

export default NotFound;