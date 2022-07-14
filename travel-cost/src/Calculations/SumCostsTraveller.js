import useFetch from "../useFetch";
import { useState } from "react";
import React from 'react';

const SumCostsTraveller = (traveller) => {
    const [sumPerson, setSumPerson] = useState(0);
    const { data: costs, c_isPending } = useFetch('http://localhost:8000/costs/');
    let tempSumPerson = 0;
    // if we get the traveller as an object, unpack it first
    if (traveller.traveller) {
        traveller = traveller.traveller;
    }
    if (costs && traveller&&!c_isPending) {
        for (let i = 0; i < costs.length; i++) {
            if (costs[i].whopaid === traveller.name) {
                tempSumPerson += JSON.parse(costs[i].price); 
            }       
        }
        if(tempSumPerson !== sumPerson) setSumPerson(tempSumPerson);
    }

    return ( 
        <div>Sum of spent money: {sumPerson}€</div>        
     );
}
 
export default SumCostsTraveller;