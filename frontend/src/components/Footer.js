// // import PropTypes from 'prop-types'
// import '../css/Footer.css';
// import React, { Component } from 'react'
// // import { Link } from "react-router-dom";
// import "animate.css/animate.compat.css"
// // import BodyB from "../images/body_b.png"
// import Logo from "../images/Logo (2).gif"
// import FB from "../images/icon/fb.png"
// import LI from "../images/icon/lnkd.png"
// import INSTA from "../images/icon/insta.png"
// import PHONE from "../images/icon/phone.png"
// import MAIL from "../images/icon/mail.png"
// import LOC from "../images/icon/location.png"
// import Pull from "../images/pullup.gif"










// export class Footer extends Component {
//     static propTypes = {}

//     render() {
//         return (
//             <div style={{ height: '75vh', background: 'black', margin: '0px' }}>
//                 <div className='footer_div'>

//                     <div className='ftr_logo_div'>
//                         <img src={Logo} className='footer_logo' alt=''></img>
//                         <p style={{ marginTop: '2vw', marginLeft: '7.4vw', marginRight: '2vw', color: 'white', fontWeight: 'bold' }}>We are serve to Fitness Industries. One solution with all u'r needs.</p>
//                         <h4 style={{ color: 'orangered', marginLeft: '7.4vw', }}>Follow Us</h4>
//                         <img style={{ marginLeft: '7vw' }} width="25" height="25" src={FB} alt='' />
//                         <img style={{ marginLeft: '1vw' }} width="26" height="26" src={INSTA} alt='' />
//                         <img style={{ marginLeft: '1vw' }} width="25" height="25" src={LI} alt='' />
//                     </div>
//                     <div className='contact_us'>
//                         <h1 style={{ color: 'orangered' }}>FitSyncX</h1>
//                         <img style={{ height: '50vh' }} src={Pull} alt="" />
//                     </div>
//                     <div className='contact_us'>
//                         <h2 style={{ color: 'orangered' }}>Contact Us</h2>
//                         <ul style={{ textAlign: 'left', marginLeft: '10vh', listStyleType: 'none' }}>
//                             <li className='head'>Talk us on</li>
//                             <li style={{ display: 'flex' }}><div><img style={{ width: '20px', marginTop: '3px' }} src={PHONE} alt="" /></div>
//                                 <span style={{ color: 'orangered' }}> 7404204923</span></li>
//                         </ul>
//                         <ul style={{ textAlign: 'left', marginLeft: '10vh', listStyleType: 'none' }}>
//                             <li className='head'>Email us on</li>
//                             <li style={{ display: 'flex' }}><div><img style={{ width: '20px', marginTop: '3px' }} src={MAIL} alt="" /></div>
//                                 <span style={{ color: 'orangered' }}>&nbsp; jangralakshay611@gmail.com</span></li>
//                         </ul>
//                         <ul style={{ textAlign: 'left', marginLeft: '10vh', listStyleType: 'none' }}>
//                             <li className='head'>Address</li>
//                             <li style={{ display: 'flex' }}><div><img style={{ width: '20px', marginTop: '3px' }} src={LOC} alt="" /></div>
//                                 <span style={{ color: 'orangered' }}>&nbsp; Rudra Colony, Birla Colony
//                                     Bhiwani, Haryana 127021</span></li>
//                         </ul>
//                     </div>

//                 </div>
//                 <div style={{ textAlign: 'center', background: 'black' }}>
//                     <p style={{ color: 'orangered', paddingBottom: '2vh' }}>Copyright © 2025 FitSyncX. All Rights Reserved</p>
//                 </div>
//             </div>
//         )
//     }
// }
// // #FF6300
// export default Footer





// import PropTypes from 'prop-types'
import '../css/Footer.css';
import React, { Component } from 'react';
import "animate.css/animate.compat.css";
import Logo from "../images/Logo (2).gif";
import FB from "../images/icon/fb.png";
import LI from "../images/icon/lnkd.png";
import INSTA from "../images/icon/insta.png";
import PHONE from "../images/icon/phone.png";
import MAIL from "../images/icon/mail.png";
import LOC from "../images/icon/location.png";
import Pull from "../images/pullup.gif";

export class Footer extends Component {
    static propTypes = {};

    render() {
        return (
            <footer className="footer">
                <div className="footer_container">
                    {/* Brand / About */}
                    <div className="footer_brand">
                        <img src={Logo} className="footer_logo" alt="FitSyncX Logo" />
                        <p className="footer_tagline">
                            We serve the fitness industry — one solution for all your needs.
                        </p>

                        <h4 className="footer_heading_small">Follow Us</h4>
                        <div className="footer_socials">
                            <img width="26" height="26" src={FB} alt="Facebook" />
                            <img width="26" height="26" src={INSTA} alt="Instagram" />
                            <img width="26" height="26" src={LI} alt="LinkedIn" />
                        </div>
                    </div>

                    {/* Showcase / Visual */}
                    <div className="footer_showcase">
                        <h1 className="footer_title">FitSyncX</h1>
                        <img className="footer_gif" src={Pull} alt="Workout" />
                    </div>

                    {/* Contact */}
                    <div className="footer_contact">
                        <h2 className="footer_heading">Contact Us</h2>

                        <ul className="contact_list">
                            <li className="head">Talk to us</li>
                            <li className="contact_item">
                                <img className="icon" src={PHONE} alt="" />
                                <span>7404204923</span>
                            </li>
                        </ul>

                        <ul className="contact_list">
                            <li className="head">Email us</li>
                            <li className="contact_item">
                                <img className="icon" src={MAIL} alt="" />
                                <span>jangralakshay611@gmail.com</span>
                            </li>
                        </ul>

                        <ul className="contact_list">
                            <li className="head">Address</li>
                            <li className="contact_item">
                                <img className="icon" src={LOC} alt="" />
                                <span>
                                    Rudra Colony, Birla Colony, Bhiwani, Haryana 127021
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer_bottom">
                    <p>Copyright © 2025 FitSyncX. All Rights Reserved</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
