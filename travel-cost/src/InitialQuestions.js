import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react';

const InitialQuestions = ({traveller}) => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');
    const [daily, setDaily] = useState('');
    const [monthly, setMonthly] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const createNewTraveller = (blog) => {
        fetch("http://localhost:8000/traveller", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(blog)
                }).then(() => {
                    console.log("New traveller Created")
                    setIsPending(false);
                    history.push('/');
                })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, budget, daily, monthly };
        setIsPending(true);
        
        if (traveller && traveller.name === "default") {
            // first delete default traveller, then add new name
            fetch("http://localhost:8000/traveller/1", {
                method: "DELETE",
            }).then(() => {
                createNewTraveller(blog);
            })
        } else { 
            createNewTraveller(blog);
        }
        
        }

    return (
        <div className="create">
            <h2>Add a new Name to your Travels!</h2>
            <form onSubmit={handleSubmit}>

                <label>Your Name:</label>
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Your total travel budget in €:</label>
                <input
                    type="number"
                    required
                    value={budget}
                    placeholder=""
                    onChange={(e) => setBudget(e.target.value)}
                />

                <label>Your daily travel budget in €:</label>
                <input
                    type="number"
                    value={daily}
                    required
                    placeholder=""
                    onChange={(e) => {
                        setDaily(e.target.value);
                        setMonthly(e.target.value  * 30);
                    }
                    }
                />
                <label>Your monthly travel budget in €:</label>
                <input
                    type="number"
                    value={monthly}
                    required
                    placeholder=""
                    onChange={(e) => {
                        setMonthly(e.target.value);
                        setDaily(Math.round(((e.target.value / 30) + Number.EPSILON) * 100) / 100);
                    }
                    }
                />
                {!isPending && <button>Add Traveller</button>}
                {isPending && <button disabled>Adding Traveller...</button>}
            </form>
        </div>
    );
}
export default InitialQuestions;