import useFetch from './useFetch'
import SumTotalBudget from './Calculations/SumTotalBudget'
import React from 'react';

const Overview = () => {

    const { data: costs, isPending, error } = useFetch("http://localhost:8000/costs")

    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            <h2>Summary</h2>
            <SumTotalBudget></SumTotalBudget>
        </div>
     );
}
 
export default Overview;