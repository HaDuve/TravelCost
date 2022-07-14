import useFetch from "../useFetch";
import { useState } from "react";
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


const SumCostsCountry = ({ costs }) => {
    var holder = {};
    costs.forEach(function (d) {
        if (holder.hasOwnProperty(d.country)) {
            holder[d.country] = holder[d.country] + d.price;
        } else {
            holder[d.country] = d.price;
        }
    });

    var summedCosts = [];

    for (var prop in holder) {
        summedCosts.push({ country: prop, price: holder[prop] });
    }

    return (
        <div>
            <h2>Country Summary</h2>
            {summedCosts.map((cost) => (
                <div className="cost-preview">
                        <h2>{cost.country}</h2>
                        <p>Total money spent here:  {cost.price} €</p>
                </div>
            )) }
        </div>
    );
}

 
export default SumCostsCountry;