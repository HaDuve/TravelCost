import { useState } from 'react';
import Bloglist from './Bloglist'

const Home = () => {
    const [entries, setEntries] = useState([
        { title: "pizza in germany", body: "01.01.2022", author: "Hannes", id: 1 },
        { title: "rice and curry in sri lanka", body: "02.01.2022", author: "Hannes", id: 2 },
        { title: "tempeh in bali", body: "03.01.2022", author: "Tina", id: 3 }
    ]);

    return ( 
        <div className="home">
            <Bloglist blogs={ entries } title={ "All entries!"} ></Bloglist>
        </div>
     );
}
 
export default Home;