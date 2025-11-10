// import PropTypes from 'prop-types'
import '../css/features.css';
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import "animate.css/animate.compat.css"
// import ScrollAnimation from 'react-animate-on-scroll';
import Card from "./Card"
import WP from "../images/logo/whatsapp.png"
import ATT from "../images/logo/att.png"
import TRACK from "../images/logo/progress-report.png"
import CUSTOMER from "../images/logo/customer.png"
import STAAF from "../images/logo/staaf.png"
import EASY from "../images/logo/easy.jpg"
import Dashbord from "../images/logo/dashbord.jpg"



export class Features extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='features'>
                <div className='features_div'>
                    <h1 className='featur_h1'>Explore  <span style={{ color: 'orangered' }}>FitSyncX</span></h1>
                    <div className='card_div'>
                        <div className='card1'>
                            <Card title='WHATSAPP INTEGRTION' description='Increase Renewals by 67 % and Balance Recoveries by 50 % using our Automatic WhatsApp Reminders feature' image={WP} />
                        </div>
                        <div className='card2'>
                            <Card title='ATTENDENCE SYSTEM' description='A Gym Attendance System helps track and manage member check-ins, ensuring smooth operations and security.' image={ATT} />
                        </div>
                        <div className='card3'>
                            <Card title='TRACKING SYSTEM' description='A Gym Tracking System helps members and trainers monitor workout progress, performance, and fitness goals effectively.' image={TRACK} />
                        </div>
                        <div className='card4'>
                            <Card title='STAAF MANAGEMENT' description='A Gym Staff Management helps gym owners efficiently manage trainers, staff schedules, and payroll operations.' image={STAAF} />
                        </div>
                        <div className='card5'>
                            <Card title='CUSTOMER MANAGEMENT' description='A Gym Customer Management System helps gyms efficiently manage member information,Store customer details, fitness goals, engagement, and services.' image={CUSTOMER} />
                        </div>
                    </div>
                    <div className='feature_last'>
                        <div className='easy'>
                            <h2 style={{ color: 'orangered', paddingTop: '1vh', textDecoration: 'none' }}>EASY TO USE GYM MANAGEMENT SOFTWARE</h2>
                            <p style={{ paddingTop: '3vh', color: 'white' }}>Feature packed software designed for all type of gym and fitness studios. Easy to manage all gym activities like enquiry, attendance, follow-ups, expenses, reports etc. at one place.</p>
                        </div>
                        <div className='easy_img'>
                            <img src={EASY} alt="" style={{ width: '30vw', borderRadius: '40px', marginTop: '12px' }} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='feature_last' style={{ marginTop: '13vw' }}>
                        <div className='easy_img' style={{ marginLeft: '0' }}>
                            <img src={Dashbord} alt="" style={{ width: '23vw', borderRadius: '40px', marginTop: '12px' }} />
                        </div>
                        <div className='easy' style={{ marginLeft: '15vh' }}>
                            <h2 style={{ color: 'orangered', paddingTop: '1vh', textDecoration: 'none' }}>ANALYSIS AND REPORT</h2>
                            <p style={{ paddingTop: '3vh', color: 'white' }}>Feature packed software designed for all type of gym and fitness studios. Easy to manage all gym activities like enquiry, attendance, follow-ups, expenses, reports etc. at one place.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Features   
