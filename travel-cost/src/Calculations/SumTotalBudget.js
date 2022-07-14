import useFetch from "../useFetch";
import { useState } from "react";
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


const SumTotalBudget = () => {
    const [sumBudget, setSumBudget] = useState(0);
    const [sumCosts, setSumCosts] = useState(0);
    const { data: travellers, t_isPending } = useFetch('http://localhost:8000/traveller/');
    const { data: costs, c_isPending } = useFetch('http://localhost:8000/costs/');

    let tempSumBudget = 0;
    if (travellers && !t_isPending) {
        for (let i = 0; i < travellers.length; i++) {
            tempSumBudget += JSON.parse(travellers[i].budget); 
        }
        if(tempSumBudget !== sumBudget) setSumBudget(tempSumBudget);
    }

    let tempSumCosts = 0;
    if (costs && !c_isPending) {
        for (let i = 0; i < costs.length; i++) {
            tempSumCosts += JSON.parse(costs[i].price); 
        }
        if(tempSumCosts !== sumCosts) setSumCosts(tempSumCosts);
    }

    return ( 
        <div>
            {t_isPending || c_isPending && <div> Loading...</div>}
            {!c_isPending && <div>Sum of Budget: {sumBudget}€</div>}
            {!t_isPending && <div>Sum of spent money: {sumCosts}€</div>}
            {!c_isPending && !t_isPending && <div>Total money left to spend: {sumBudget - sumCosts}€</div>}
            
            <PieChart
                data={[
                    { title: 'Total money left to spend:', value: sumBudget - sumCosts, color: '#D9F8C4' },
                ]}
                totalValue={sumBudget}
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                labelPosition={0}
                viewBoxSize={[200, 200]}
                animated={true}
                radius={25}
                paddingAngle={5}
                lineWidth={15} rounded 
            />
        </div>        
     );
}
 
export default SumTotalBudget;