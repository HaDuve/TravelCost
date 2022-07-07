import { useState, useEffect } from 'react';
import Bloglist from './Bloglist'

const Home = () => {
    const [entries, setEntries] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/entries")
            .then(res => { 
                return res.json();
            })
            .then(data => {
                console.log(data);
                setEntries(data);
                setIsPending(false);
            })
    }, []);

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {entries && <Bloglist blogs={entries} title={"All entries"} ></Bloglist>}
        </div>
     );
}
 
export default Home;