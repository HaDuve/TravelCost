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
                    <div>{cost.date}</div>
                    <div>{cost.category}</div>
                    <div>{cost.country}</div>
                    <div>{cost.place}</div>
                    <div>{cost.price}</div>
                    <div>{cost.whopaid}</div>
                    <div>{cost.oweperc}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default CostDetails;