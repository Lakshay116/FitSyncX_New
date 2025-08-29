import React from 'react';
import '../css/Sidebar.css'
// import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';

function Sidebar(props) {

    return (
        <div className='sidebar_main'>
            {/* <h2 className='side_h1'>FitsyncX</h2> */}
            <div className='sidebar_header'>
                <div style={{ color: 'grey' }}><AccountCircleIcon style={{ fontSize: 55 }}></AccountCircleIcon></div>
                <h2 style={{ marginBottom: '5px' }} >Welcome <h4 style={{ fontSize: 'small' }}>User Name</h4></h2>
            </div>
            <ul className='sideList'>
                {props.sidebardata.map((val, key) => {
                    return <button className={props.isSelected == val.index ? "selected-button" : "button"}
                        style={{ width: '100%', border: 'none' }}
                        onClick={() => props.setIsSelected(val.index)} >
                        <li key={key} className='row' >

                            <div id='icon'>{val.icon}</div>

                            <div id='title'>{val.title}</div>

                        </li>
                    </button>
                })}
            </ul>
        </div>
    )
}

export default Sidebar;