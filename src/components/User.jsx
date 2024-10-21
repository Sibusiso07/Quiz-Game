import React, { useRef } from "react";

function User({ setUser }) {
    const inputRef = useRef();

    const handleClick = () => {
        const userName = inputRef.current.value.trim(); // Trim any extra whitespace
        if (userName) {
            setUser(userName);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    return (
        <div className="start">
            <h2 className="startHeader"> QuizMania</h2>
            <h2 className="startWelcome">Welcome Challenger!</h2>
            <h2 className="startChallenger">Enter Your Name:</h2>
            <input
                className="startInput"
                placeholder="Enter your name"
                ref={inputRef}
                onKeyDown={handleKeyDown} // Allow pressing Enter to submit
            />
            <button className="startButton" onClick={handleClick}>
                Enter
            </button>
        </div>
    );
}

export default User;
