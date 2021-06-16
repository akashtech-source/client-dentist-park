import React from 'react';
import doctorOne from '../../../images/doctor-1.jpg'
import doctorTwo from '../../../images/doctor-2.jpg'
import doctorThree from '../../../images/doctor-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Doctors = () => {
    return (
        <div className="">
            <div className="service-text ms-5 mt-5">
                <h5 style={{
                borderRadius: '30px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 30px lightgrey',
                width: '300px',
                textAlign: 'center',
                padding:'10px'
                 }}
                 ><span className="text-success">#</span> Our Dentist</h5>
            </div>

            <p className="ms-5 display-4 mt-5">
                Our Specialized and <br />Experienced 
                <span className="text-primary"> Dentist</span>
            </p>

            <div className="d-flex mt-5 justify-content-center">
            <div className="row container g-3">
                <div className="col-md-4">
                <div class="card" style={{width: '22rem'}}>
                    <img src={doctorOne} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h3>Dr. Johnson Melbourne</h3>
                        <h5 class="card-text text-secondary">Prosthodontics Dentist</h5>
                        <div className="d-flex fs-3 justify-content-center mt-4">
                            <FontAwesomeIcon className='me-3 text-primary' icon={faFacebook} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faInstagram} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faLinkedin} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faTwitter} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="card" style={{width: '22rem'}}>
                    <img src={doctorTwo} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h3>Dr. Ena Dicrosa</h3>
                        <h5 class="card-text text-secondary">Aesthetic Dentistry</h5>
                        <div className="d-flex fs-3 justify-content-center mt-4">
                            <FontAwesomeIcon className='me-3 text-primary' icon={faFacebook} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faInstagram} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faLinkedin} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faTwitter} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="card" style={{width: '22rem'}}>
                    <img src={doctorThree} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h3>Dr. Addison Smith</h3>
                        <h5 class="card-text text-secondary">Gastroenterologists</h5>
                        <div className="d-flex fs-3 justify-content-center mt-4">
                            <FontAwesomeIcon className='me-3 text-primary' icon={faFacebook} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faInstagram} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faLinkedin} />
                            <FontAwesomeIcon className='me-3 text-primary' icon={faTwitter} />
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Doctors;