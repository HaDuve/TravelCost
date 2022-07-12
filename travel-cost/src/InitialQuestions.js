import { useState } from "react";
import { useHistory } from "react-router-dom";

const InitialQuestions = () => {
    const [t_name, setName] = useState('');
    const [t_budget, setBudget] = useState('');
    const [t_daily, setDaily] = useState('');
    const [t_monthly, setMonthly] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { t_name, t_budget, t_daily, t_monthly };
        setIsPending(true);


    fetch("http://localhost:8000/traveller", {
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
            <h2>Looks like you are new here!</h2>
            <form onSubmit={handleSubmit}>

                <label>Your Name:</label>
                <input
                    type="text"
                    value={t_name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Your total travel budget:</label>
                <input
                    type="number"
                    required
                    value={t_budget}
                    onChange={(e) => setBudget(e.target.value)}
                />

                <label>Your daily travel budget:</label>
                <input
                    type="number"
                    value={t_daily}
                    required
                    onChange={(e) => setDaily(e.target.value)}
                />
                <label>Your monthly travel budget:</label>
                <input
                    type="number"
                    value={t_monthly}
                    required
                    onChange={(e) => setMonthly(e.target.value)}
                />
                {!isPending && <button>Add Traveller</button>}
                {isPending && <button disabled>Adding Traveller...</button>}
            </form>
        </div>
    );
}
export default InitialQuestions;