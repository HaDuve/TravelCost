import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CostDetails = () => {
    const { id } = useParams();
    const { data: cost, error, isPending } = useFetch('http://localhost:8000/costs/'+ id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch("http://localhost:8000/costs/" + cost.id, { 
            method: "DELETE",
        }).then(() => {
            history.push('/');
        });
    }

    return ( 
        <div className="cost-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {cost && (
                <article>
                    <h2>{cost.description}</h2>
                    <p>Bought by {cost.whopaid}</p>
                    <div>Date: {cost.date}</div>
                    <div>Category: {cost.category[0].toUpperCase() + cost.category.substring(1)}</div>
                    <div>Country: {cost.country}</div>
                    <div>Place: {cost.place}</div>
                    <div>Price: {cost.price}€</div>
                    <div>Who paid: {cost.whopaid}</div>
                    <div>How much is owed: {cost.oweperc}%</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default CostDetails;