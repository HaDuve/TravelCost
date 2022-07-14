import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react';

const Create = () => {
    const [date, setDate] = useState('dd/mm/yyyy');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [place, setPlace] = useState('');
    const [price, setPrice] = useState(0);
    const [whopaid, setWhopaid] = useState('H');
    const [oweperc, setOweperc] = useState(50);

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { date, description, category, country, place, price, whopaid, oweperc };
        setIsPending(true);

        fetch("http://localhost:8000/costs", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Created")
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new cost</h2>
            <form onSubmit={handleSubmit}>

                <label>Cost Date:</label>
                <input
                    type="date"
                    value={date}
                    required
                    onChange={(e) => setDate(e.target.value)}
                />

                <label>Cost Description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    >
                </textarea>

                <label>Cost Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="traffic">National Traffic</option>
                    <option value="home">Accomodation</option>
                    <option value="meals">Meals and Drinks</option>
                    <option value="other">Other (Shopping, Activities, ...)</option>
                </select>

                <label>Cost Country:</label>
                <input
                    type="text"
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                />
                <label>Cost Place:</label>
                <input
                    type="text"
                    value={place}
                    required
                    onChange={(e) => setPlace(e.target.value)}
                />
                <label>Cost Price:</label>
                <input
                    type="number"
                    value={price}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Who paid?:</label>
                <select
                    value={whopaid}
                    onChange={(e) => setWhopaid(e.target.value)}
                >
                    <option value="H">Hannes</option>
                    <option value="T">Tina</option>
                </select>

                <label>Percentage Owed:</label>
                <input
                    type="number"
                    value={oweperc}
                    required
                    onChange={(e) => setOweperc(e.target.value)}
                />

                { !isPending && <button>Add Cost</button>}
                { isPending && <button disabled>Adding Cost...</button>}
            </form>
        </div>
     );
}
 
export default Create;