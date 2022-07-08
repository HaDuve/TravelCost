import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Travel Cost App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Entry</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;