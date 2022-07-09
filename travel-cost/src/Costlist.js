import { Link } from "react-router-dom";

const Costlist = ({ costs, title }) => {


    return ( 
        <div className="cost-list">
            <h2> {title} </h2>
            {costs.map((cost) => (
                <div className="cost-preview" key={cost.id}>
                    <Link to={`/costs/${cost.id}`}>
                        <h2> {cost.description} </h2>
                        <p>{cost.category}</p>
                        <p>Bought in {cost.place}, {cost.country} </p>
                        <p>Bought by {cost.whopaid} for {cost.price}€ </p>
                    </Link>                    
                </div>
            )) }
        </div>
     );
}

export default Costlist;