import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import React from 'react';

const TravellerDetails = () => {
    const { id } = useParams();
    const { data: traveller, error, isPending } = useFetch('http://localhost:8000/traveller/'+ id);
        
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/traveller/" + traveller.id, { 
            method: "DELETE",
        }).then(() => {
            history.push('/');
        });
    }

    const [sumPerson, setSumPerson] = useState(0);
    const { data: costs, c_isPending } = useFetch('http://localhost:8000/costs/');
    let tempSumPerson = 0;
    if (costs && traveller&&!c_isPending) {
        console.log("cost & traveller ready")
        for (let i = 0; i < costs.length; i++) {
            if (costs[i].whopaid === traveller.name) {
                tempSumPerson += JSON.parse(costs[i].price); 
            }       
        }
        if(tempSumPerson !== sumPerson) setSumPerson(tempSumPerson);
    }

        
    return ( 
        <div className="cost-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {traveller && costs && (
                <article>
                    <h2>{traveller.name}</h2>
                    <p>Total Budget: {traveller.budget}€</p>
                    <p>Already paid in total: {sumPerson}€</p>
                    <p>Total Money left: {traveller.budget - sumPerson}€</p>
                    <div>
                        <p>Daily Budget: {traveller.daily}€</p>
                        <p>Monthly Budget: {traveller.monthly}€</p>
                    </div>
                    <div>
                        <button onClick={handleClick}>Delete this Traveller</button>
                    </div>
                </article>
            )}
        </div>
    );
}
 
export default TravellerDetails;