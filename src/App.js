import "./App.css";
import logo from "./Images/logo.png";
import AppButton from "./components/AppButton";
import ClickCounter from "./components/ClickCounter";
import { useState } from "react";

function App() {
    const [numClicks, setNumClicks] = useState(0);

    const handleClick = () => {
        setNumClicks(numClicks + 1);
    };
    const restartCounter = () => {
        setNumClicks(0);
    };
    return (
        <div className="App">
            <div className="container-logo">
                <h1>Click Counter</h1>
            </div>
            <div className="main-container">
                <ClickCounter numClicks={numClicks} />
                <AppButton
                    text="Click"
                    isClickButton={true}
                    handleClick={handleClick}
                />
                <AppButton
                    text="Restart"
                    isClickButton={false}
                    handleClick={restartCounter}
                />
            </div>
        </div>
    );
}

export default App;
