import React from 'react';
import {Link} from "react-router-dom";
function Header() {
    return(
        
        <header>
            <div className='title'>Portfolio</div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/random'>PlaceHolder</Link>
                <Link to='/private'>Private</Link>
                
            </nav>
        </header>
    )
}


export default Header