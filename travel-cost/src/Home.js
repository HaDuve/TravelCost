import { useState } from 'react';

const Home = () => {
    const [entries, setEntries] = useState([
        { title: "pizza in germany", body: "01.01.2022", author: "Hannes", id: 1 },
        { title: "rice and curry in sri lanka", body: "02.01.2022", author: "Hannes", id: 2 },
        { title: "tempeh in bali", body: "03.01.2022", author: "Tina", id: 3 }
    ]);

    return ( 
        <div className="home">
            {entries.map((entry) => (
                <div className="blog-preview" key={entry.id}>
                    <h2> {entry.title} </h2>
                    <p>Bought by {entry.author}</p>
                </div>
            )) }
        </div>
     );
}
 
export default Home;