import useFetch from './useFetch'
import Costlist from './Costlist'

import { Link } from 'react-router-dom';

const Home = () => {    
    return ( 
        <div className="home">
            <h2>
                <Link to="/Overview">Overview of the Travel Costs</Link>               
            </h2>
            <h2>
                <Link to="/Inspect">Inspect costs for a single month or country</Link>
            </h2>
        </div>        
        );
}
 
export default Home;