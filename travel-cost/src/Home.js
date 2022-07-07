import useFetch from './useFetch'
import Bloglist from './Bloglist'

const Home = () => {
    const { data: entries, isPending, error } = useFetch("http://localhost:8000/entries")

    return ( 
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {entries && <Bloglist blogs={entries} title={"All entries"} ></Bloglist>}
        </div>
     );
}
 
export default Home;