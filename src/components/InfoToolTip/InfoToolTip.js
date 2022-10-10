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
                <p className="tooltip__text">{message}</p>                    
            </div>
        </div>
       </div>  
    )}

export default InfoTooltip;