import { useState, useEffect } from "react";
import Trivia from "./Trivia";

function Setup({ setSetupComplete }) {
    const [number, setNumber] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');
    const [data, setData] = useState('')

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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`;
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     if (number && category && difficulty && type) {
    //         fetchData();
    //     }
    // }, [number, category, difficulty, type]);

    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error(error);
            }
    };

    const handleClick = () => {
        setSetupComplete(true);
    };

    return (
        <div className="setup-container">
            <div className="setup-header">
                <h2>Choose your challenge</h2>
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
                    <button type="submit" onClick={handleClick}>Start</button>
                </div>
            </form>
            {data && <Trivia data={data} />}
        </div>
    );
}

export default Setup;