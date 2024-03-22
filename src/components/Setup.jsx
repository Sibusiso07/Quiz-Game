import { useState } from "react";

function Setup() {
    const [number, setNumber] = useState('')
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [type, setType] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(number, category, difficulty, type);
        if (category === "general") {
            setCategory('9');
        } else if (category === "sports") {
            setCategory('21');
        } else if (category === "mythology") {
            setCategory('20');
        } else if (category === "geography") {
            setCategory('22');
        } else if (category === "history") {
            setCategory('23');
        } else if (category === "computers") {
            setCategory('18');
        }


    }

    return (
        <div>
            <div>
                <h2>Choose your challenge</h2>
            </div>
            <form onClick={handleSubmit}>
                <div>
                    <label>Number of questions:</label>
                    <select value={number} onChange={(e) => setNumber(e.target.value)}>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                        <option value='50'>50</option>
                    </select>
                </div>
                <div>
                    <label>Select Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value='general'>General Knowledge</option>
                        <option value='sports'>Sports</option>
                        <option value='mythology'>Mythology</option>
                        <option value='geography'>Geography</option>
                        <option value='history'>History</option>
                        <option value='computers'>Science: Computers</option>
                    </select>
                </div>
                <div>
                    <label>Select Difficulty:</label>
                    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>
                <div>
                    <label>Select Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value='multiple'>Multiple Choice</option>
                        <option value='boolean'>True / False</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Start</button>
                </div>
            </form>
        </div>
    )
}

export default Setup;