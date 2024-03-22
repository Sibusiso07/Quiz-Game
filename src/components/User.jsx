import React, { useRef } from "react";

function User({ setUser }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUser(inputRef.current.value);
    };

    return (
        <div className="start">
            <h1 className="startHeader">Welcome Challenger!!</h1>
            <h2 className="starHeader">Please Enter Your Name:</h2>
            <input
                className="startInput"
                placeholder="Enter your name"
                ref={inputRef}
            />
            <button className="startButton" onClick={handleClick}>
                Enter
            </button>
        </div>
    );
}

export default User;