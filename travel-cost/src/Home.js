import useFetch from './useFetch'
import InitialQuestions from './Forms/CreateTraveller'
import React from 'react';


import { Link } from 'react-router-dom';

const Home = () => {
    const { data: traveller } = useFetch('http://localhost:8000/traveller/1');
    const notDefault = (traveller && !(traveller.name === "default"));
    return (
        
        <div className="home">
            {traveller && (traveller.name === "default") &&
                <InitialQuestions traveller={traveller}></InitialQuestions>
            }            
            {notDefault &&
                <h2>Welcome, {traveller.name}!</h2>
            }
            {notDefault &&
                <p>Here, you can find a overview of your whole travels or specific information about a month day or person. Maybe you want to add another traveller to the calculator?</p>
            }
            {notDefault &&
                <div>
                    <button><Link to="/Overview">OVERVIEW</Link></button>
                </div>
            }
            {notDefault &&
                <div>
                    <button><Link to="/Inspect">INSPECT SPECIFIC COSTS</Link></button>
                </div>
            }
            {notDefault &&
                <div>
                    <button><Link to="/New-Traveller">ADD NEW TRAVELLER</Link></button>
                </div>
            }
        </div>        
        );
}
 
export default Home;