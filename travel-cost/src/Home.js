import useFetch from './useFetch'
import InitialQuestions from './InitialQuestions'
import { useState } from 'react';


import { Link } from 'react-router-dom';

const Home = () => {
    const { data: traveller } = useFetch('http://localhost:8000/traveller/1');

    return (
        
        <div className="home">
            {/* {traveller && (traveller.name === "default_name")&&<InitialQuestions></InitialQuestions>} */}
            <InitialQuestions traveller={traveller}></InitialQuestions>
            
            {traveller && !(traveller.name === "default_name") &&
                <h2>Welcome, {traveller.name}!</h2>
            }
            {traveller && !(traveller.name === "default_name") &&
                <p>Here, you can find a overview and specific information</p>
            }
            {traveller && !(traveller.name === "default_name") &&
                <div>
                    <button><Link to="/Overview">Overview of the Travel Costs</Link></button>
                </div>
            }
            {traveller && !(traveller.name === "default_name") &&
            <div>
                <button><Link to="/Inspect">Inspect costs for a single month or country</Link></button>
                </div>
            }
        </div>        
        );
}
 
export default Home;