import React, { useRef } from "react";

function User({setUser}) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUser(inputRef.current.value);
    };

    return (
        <div className="start">
            <h2 className="startHeader">Who dares to take this challenge?</h2>
            <input
                className="startInput"
                placeholder="Enter you name"
                ref={inputRef}
            />
            <button className="startButton" onClick={handleClick}>
                Start
            </button>
        </div>
    );
}

export default User;