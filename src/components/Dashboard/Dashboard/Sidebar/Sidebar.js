import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <Link to="/" className="fs-2 text-white">Dentist Park</Link>
            <ul className="list-unstyled fs-5">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/totalService" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Total Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/allBooking" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>All Booking</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;