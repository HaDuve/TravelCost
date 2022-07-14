import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Travel Cost App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Add-Cost">New Cost</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;