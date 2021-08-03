import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
        <div>
            <Link to="/about">About Me</Link>
        </div>
        <div>
            <Link to="/arttitle">My Artwork</Link>
        </div>
        <div>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>

    
  );
}

export default Navbar;
