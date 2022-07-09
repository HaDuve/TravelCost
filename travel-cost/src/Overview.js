import useFetch from './useFetch'
import Costlist from './Costlist'

const Overview = () => {

    const { data: costs, isPending, error } = useFetch("http://localhost:8000/costs")

    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {costs && <Costlist costs={costs} title={"All costs"} ></Costlist>}
        </div>
     );
}
 
export default Overview;