import useFetch from './useFetch'
import SumTotalBudget from './Calculations/SumTotalBudget'
import React from 'react';
import SumCostsCountry from './Calculations/SumCostsCountry';

const Overview = () => {

    const { data: costs, isPending, error } = useFetch("http://localhost:8000/costs")

    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            <SumTotalBudget></SumTotalBudget>
            <SumCostsCountry></SumCostsCountry>
        </div>
     );
}
 
export default Overview;