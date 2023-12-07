import React from "react";
import "../stylesheets/AppButton.css"

function AppButton({ text, isClickButton, handleClick }) {
    return(
        <button
            className={isClickButton ? "btn-click" : "btn-restart"}
            onClick={handleClick}>
            {text}
        </button>
    );
}

export default AppButton;
