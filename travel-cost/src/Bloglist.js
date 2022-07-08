import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {


    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((entry) => (
                <div className="blog-preview" key={entry.id}>
                    <Link to={`/entries/${entry.id}`}>
                        <h2> {entry.title} </h2>
                        <p>Bought by {entry.author}</p>
                    </Link>                    
                </div>
            )) }
        </div>
     );
}

export default Bloglist;