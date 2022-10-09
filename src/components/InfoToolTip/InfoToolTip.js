import React from "react";
import './InfoToolTip.css';

function InfoTooltip({isOpen, onClose, message}) {

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return(
        <div className={`tooltip ${isOpen && "tooltip_opened"}`} onClick={handleOverlayClick}>
        <div className="tooltip__container">
            <div className="tooltip__wrapper">
                {/* <img className="tooltip__image" src={isSuccess ? success : declined }/> */}
                <p className="tooltip__text">{message}</p>
                    {/* {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз'} */}
                {/* <button type="button" className="pop-up__close" onClick={onClose}></button> */}
            </div>
        </div>
       </div>  
    )}

export default InfoTooltip;