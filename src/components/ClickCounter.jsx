import React from "react";
import "../stylesheets/ClickCounter.css"

function ClickCounter({ numClicks }) {
    return(
        <div className="counter">
            {numClicks}
        </div>
    )
}

export default ClickCounter