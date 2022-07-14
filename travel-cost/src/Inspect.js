import useFetch from './useFetch'
import TravellerList from './TravellerList'
import Costlist from './CostList'
import React from 'react';


const Overview = () => {

    const { data: travellers, isPending, error } = useFetch("http://localhost:8000/traveller")
    const { data: costs, isPending2, error2 } = useFetch("http://localhost:8000/costs")

    return ( 
        <div className="home">
            {(error || error2) && <div> {error}</div>}
            {(isPending || isPending2) && <div>Loading...</div>}
            {travellers && <TravellerList travellers={travellers} title={"All Travellers"} ></TravellerList>}
            {costs && <Costlist costs={costs} title={"All costs"} ></Costlist>}

        </div>
     );
}
 
export default Overview;