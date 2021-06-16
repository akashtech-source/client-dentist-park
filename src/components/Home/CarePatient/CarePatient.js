import React from 'react';
import overview from '../../../images/overview.png';

const CarePatient = () => {
    return (
        <div className="row mt-5 ms-md-5 ms-2">
            <div className="col-md-6">
            <div className="service-text ms-md-5 mt-5">
                <h5 style={{
                borderRadius: '30px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 30px lightgrey',
                width: '300px',
                textAlign: 'center',
                padding:'10px'
                 }}
                 ><span className="text-success">#</span> We Care For Every Patient</h5>
            </div>
            <div className="ms-5">
                <p className="display-4 mt-5">
                    Nervous Troubled <br />
                    Attractive Staring Right <br />
                    Anxiously!
                </p>
                <p className="fs-3 mt-5">Contact Us Today 
                <span className="text-info"> +088 123 654 987</span></p>
            </div>
        </div>
        <div className="col-md-4">
            <img style={{width: '100%'}} src={overview} alt="" />
        </div>
        </div>
    );
};

export default CarePatient;