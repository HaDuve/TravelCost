const Bloglist = ({ blogs, title, handleDelete }) => {


    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((entry) => (
                <div className="blog-preview" key={entry.id}>
                    <h2> {entry.title} </h2>
                    <p>Bought by {entry.author}</p>
                    <button onClick={() =>handleDelete(entry.id)}> Delete Entry</button>
                </div>
            )) }
        </div>
     );
}

export default Bloglist;