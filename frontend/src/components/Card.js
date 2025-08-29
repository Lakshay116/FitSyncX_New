// import PropTypes from 'prop-types'
import '../css/Card.css';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "animate.css/animate.compat.css"


export class Card extends Component {
    static propTypes = {}

    render() {
        let { title, description, image } = this.props;
        return (
            <div class="maincontainer">

                <div class="thecard">

                    <div class="thefront">
                        <h4 style={{ paddingTop: '2vw' }}>{title}</h4>
                        <img src={image} style={{ width: '40%', height: '32%' }} />
                        <p style={{ textAlign: 'justify', fontSize: '.9rem' }}>{description}</p>

                    </div>

                    <div class="theback">
                        <h2 style={{ paddingTop: '2vw' }}>Features</h2>
                        <ul className='ul' style={{ textAlign: 'justify', paddingTop: '2vw', paddingRight: '2vw' }}>

                            <li>Welcome message on adding enquiries</li>
                            <li>Renewal reminders</li>
                            <li>Balance payment reminders</li>
                            <li>Courtesy message for irregular members</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}



export default Card   