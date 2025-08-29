// import PropTypes from 'prop-types'
import '../css/LandingPage.css';
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Features from './Features';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer'



export class LandingPage extends Component {
    static propTypes = {}

    render() {
        return (

            <div>
                <Navbar></Navbar>
                <div className='main'>
                    <div className='mainText'>
                        <h3 style={{ fontSize: '3rem' }}>Welcome!</h3>
                        <h2 className='toptext' style={{ fontSize: '4rem' }}>Make your Body <span className='shape'>Shape</span> with</h2>
                        {/* <h1 className='ft' style={{ fontSize: '5rem' }}>FitSyncX</h1> */}
                        <div className="ft">
                            <Typewriter
                                options={{
                                    strings: ["FitSyncX"],
                                    autoStart: true,
                                    delay: 300,
                                    loop: true,
                                    cursor: null
                                }}
                            />
                        </div>
                    </div>
                    {/* <img src={BodyB} className='BodyB' /> */}
                </div>
                <About />
                <Features />
                <div style={{ height: '2px', background: 'white' }}></div>
                <Footer></Footer>
            </div>
        )
    }
}


export default LandingPage  