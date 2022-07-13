import useFetch from './useFetch'
import Costlist from './CostList'

const Overview = () => {

    const { data: costs, isPending, error } = useFetch("http://localhost:8000/costs")

    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            <h2>Summary soon...</h2>
        </div>
     );
}
 
export default Overview;