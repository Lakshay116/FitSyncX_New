// import PropTypes from 'prop-types'
import '../css/Navbar.css';
import React, { Component } from 'react'
import "animate.css/animate.compat.css"
import ABT from "../images/abt.png"




export class About extends Component {
    static propTypes = {}

    render() {
        return (

            <div className='abt_div' id='about'>

                <br style={{ color: 'black' }} />
                <div className='about'>
                    <h1 className='abt_h1'>ABOUT</h1>
                    <p className='abt_p'>FitSyncX is a powerful Gym Management & Tracking Web Application designed to streamline operations, enhance member engagement, and optimize fitness tracking. Whether you're a gym owner, trainer, or fitness enthusiast, FitSyncX provides a seamless platform to manage memberships, track workouts, and monitor progress—all in one place.</p>
                </div>

                <div className='abt_img'>
                    <img alt='' src={ABT} className='bb_img' />
                </div>
            </div >
        )
    }
}

export default About   