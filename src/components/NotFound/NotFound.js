import { useHistory } from "react-router-dom";
import './NotFound.css';

function NotFound() {

    const history = useHistory();

    // function handleGoBack() {
    //     history.goBack();
    // }

    const handleGoBack = () => history.goBack();

    return (
            <div className="not-found">
                <h2 className="not-found__error">404</h2>
                <p className="not-found__text">Страница не найдена</p>
                <button className="not-found__back-button" onClick={handleGoBack}>Назад</button>
            </div>            
    )
}

export default NotFound;