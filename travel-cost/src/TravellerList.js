import { Link } from "react-router-dom";
import SumCostsTraveller from './SumCostsTraveller';
import React from 'react';

const TravellerList = ({ travellers, title }) => {

    

    return ( 
        <div className="cost-list">
            <h2> {title} </h2>
            {travellers.map((travel) => (
                <div className="cost-preview" key={travel.id}>
                    <Link to={`/traveller/${travel.id}`}>
                        <h2> {travel.name} </h2>
                        <p>Budget: {travel.budget}€</p>
                        <SumCostsTraveller traveller={travel}/>
                    </Link>                    
                </div>
            )) }
        </div>
     );
}

export default TravellerList;