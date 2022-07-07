import { useState } from 'react';
import Bloglist from './Bloglist'

const Home = () => {
    const [entries, setEntries] = useState([
        { title: "pizza in germany", body: "01.01.2022", author: "Hannes", id: 1 },
        { title: "rice and curry in sri lanka", body: "02.01.2022", author: "Hannes", id: 2 },
        { title: "tempeh in bali", body: "03.01.2022", author: "Tina", id: 3 }
    ]);

    const handleDelete = (id) => {
        const newEntries = entries.filter(entry => entry.id !== id);
        setEntries(newEntries);
    }

    return ( 
        <div className="home">
            <Bloglist blogs={entries} title={"All entries"} handleDelete={ handleDelete } ></Bloglist>
            <Bloglist blogs={entries.filter((entry) => entry.author === "Tina")} handleDelete={ handleDelete }  title={"Tinas entries!"} ></Bloglist>
        </div>
     );
}
 
export default Home;