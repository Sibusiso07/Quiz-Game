import { useState } from "react";

function Setup({ setSetupComplete, setQuizData }) {
    const [number, setNumber] = useState('10'); // Default number of questions
    const [category, setCategory] = useState('general'); // Default category
    const [difficulty, setDifficulty] = useState('medium'); // Default difficulty
    const [type, setType] = useState('multiple'); // Default type

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Map category name to its corresponding value
        const categoryMapping = {
            general: '9',
            sports: '21',
            mythology: '20',
            geography: '22',
            history: '23',
            computers: '18',
        };
        
        const categoryId = categoryMapping[category] || '';

        try {
            const url = `https://opentdb.com/api.php?amount=${number}&category=${categoryId}&difficulty=${difficulty}&type=${type}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setQuizData(data); // Pass data to App component
            setSetupComplete(true); // Set setup as complete after successfully fetching data
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="setup-container">
            <div className="setup-header">
                <h2 style={{ fontSize: '40px' }}>Choose your challenge</h2>
            </div>
            <form onSubmit={handleSubmit} className="setup-form">
                <div className="setup-input">
                    <div className="label-tag">
                        <label>Number of questions:</label>
                    </div>
                    <div className="option-tag">
                        <select value={number} onChange={(e) => setNumber(e.target.value)}>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='50'>50</option>
                        </select>
                    </div>
                </div>
                <div className="setup-input">
                    <div className="label-tag">
                        <label>Select Category:</label>
                    </div>
                    <div className="option-tag">
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value='general'>General Knowledge</option>
                            <option value='sports'>Sports</option>
                            <option value='mythology'>Mythology</option>
                            <option value='geography'>Geography</option>
                            <option value='history'>History</option>
                            <option value='computers'>Science: Computers</option>
                        </select>
                    </div>
                </div>
                <div className="setup-input">
                    <div className="label-tag">
                        <label>Select Difficulty:</label>
                    </div>
                    <div className="option-tag">
                        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </div>
                </div>
                <div className="setup-input">
                    <div className="label-tag"> 
                        <label>Select Type:</label>
                    </div>
                    <div className="option-tag">
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value='multiple'>Multiple Choice</option>
                            <option value='boolean'>True / False</option>
                        </select>
                    </div>
                </div>
                <div className="setup-button">
                    <button type="submit">Start</button>
                </div>
            </form>
        </div>
    );
}

export default Setup;
