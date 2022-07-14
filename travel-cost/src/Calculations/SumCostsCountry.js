import useFetch from "../useFetch";
import { useState } from "react";
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


const SumCostsCountry = () => {
    const [sumCosts, setSumCosts] = useState(0);
    const { data: costs, c_isPending } = useFetch('http://localhost:8000/costs/');
    
    if (costs) {
        var r = costs.reduce(function(pv, cv) {
            if ( pv[cv.country] ) {
                pv[cv.country] += cv.price;
            } else {
                pv[cv.country] = cv.price;
            }
            return pv;
        }, {});
        
        console.log(r);
    }
    return ( 
        <div>
            {!c_isPending && <div>{ }</div>}
            
        </div>     
     );
}
 
export default SumCostsCountry;