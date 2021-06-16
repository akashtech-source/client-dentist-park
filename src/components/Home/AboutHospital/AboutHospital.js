import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNurse, faMicroscope } from '@fortawesome/free-solid-svg-icons'
import './AboutHospital.css';
import aboutOne from '../../../images/about-1.png'

const AboutHospital = () => {
    return (
        <div>
            <div className="service-text ms-5 mt-5">
                <h5 style={{
                borderRadius: '30px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 30px lightgrey',
                width: '300px',
                textAlign: 'center',
                padding:'10px'
                 }}
                 ><span className="text-success">#</span> About Our Hospital</h5>
            </div>
            <div className="row">
                <div className="col-md-6 ms-5">
                    <p className="display-4 mt-4">
                    Our Clients are Our Priority, We Offer
                    Quality Dental Services <span className="text-primary">of Specialists</span>
                    </p>
                    <p className="fs-5 mb-5 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="d-flex fs-4 text-primary ">
                        <div className="me-5">
                            <li>Complete Crown</li>
                            <li>Dentals Implants</li>
                            <li>Dental X-Ray</li>
                        </div>
                        <div>
                            <li>Cosmetic Filling</li>
                            <li>Cosmetic Filling</li>
                            <li>Root Canal</li>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="d-flex me-5">
                            <FontAwesomeIcon className="display-1 text-info mt-1 p-2 brand-icon" icon={faUserNurse} />
                            <p className="fs-3 ms-3">
                            25 Years <br />
                            <span className="fs-5">Dental Experienced</span>
                            </p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon className="display-1 text-danger mt-1 p-2 brand-icon" icon={faMicroscope} />
                            <p className="fs-3 ms-3">
                            6405+ <br />
                            <span className="fs-5">Dental Services</span>
                            </p>
                        </div>
                    </div>
                </div>

                    <div className="col-md-4">
                        <img src={aboutOne} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default AboutHospital;