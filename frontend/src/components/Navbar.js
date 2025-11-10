// // import PropTypes from 'prop-types'
// import '../css/Navbar.css';
// import React, { Component } from 'react'
// import { Link } from "react-router-dom";
// import Logo from "../images/Logo (2).gif"

// export class Navbar extends Component {
//     static propTypes = {}

//     render() {
//         return (
//             <div><nav className="navbar">
//                 <Link to="/"><img src={Logo} className='logo'></img></Link>
//                 <ul className='nav_ul'>
//                     <li className='nav_li'><Link to="/" className='nav_link'>Home</Link></li>
//                     {/* <li className='nav_li'><Link to="/about" className='nav_link'>About</Link></li> */}
//                     <li className='nav_li'><Link to="/contact" className='nav_link'>Contact Us</Link></li>
//                     <li className='nav_li'><Link to="/pricing" className='nav_link'>Pricing</Link></li>
//                     <li className='nav_li'><Link to="/admin" className='nav_link'>Admin</Link></li>
//                 </ul>
//                 <div className='logsign_div'>
//                     <li className='nav_li'><Link to="/login" className='login'>LogIn</Link></li>
//                     <li className='nav_li'><Link to="/signup" className='ls_link sign'>signUp</Link></li>
//                 </div>

//             </nav></div>
//         )
//     }
// }

// export default Navbar



import '../css/Navbar.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/Logo (2).gif";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }; // for mobile menu toggle
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link to="/"><img src={Logo} className='logo' alt="Logo" /></Link>

                    {/* Menu Button (only visible on mobile) */}
                    <button
                        className={`nav_toggle ${this.state.isOpen ? "active" : ""}`}
                        onClick={this.toggleMenu}
                    >
                        {this.state.isOpen ? "✖" : "☰"}
                    </button>

                    {/* Navigation Links */}
                    <ul className={`nav_ul ${this.state.isOpen ? "open" : ""}`}>
                        <li className='nav_li'><Link to="/" className='nav_link'>Home</Link></li>
                        <li className='nav_li'><Link to="/contact" className='nav_link'>Contact Us</Link></li>
                        <li className='nav_li'><Link to="/pricing" className='nav_link'>Pricing</Link></li>
                        <li className='nav_li'><Link to="/admin" className='nav_link'>Admin</Link></li>
                    </ul>

                    <div className={`logsign_div ${this.state.isOpen ? "open" : ""}`}>
                        <li className='nav_li'><Link to="/login" className='login'>LogIn</Link></li>
                        <li className='nav_li'><Link to="/signup" className='ls_link sign'>SignUp</Link></li>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
