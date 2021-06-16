import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNurse } from '@fortawesome/free-solid-svg-icons'
import './infoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white ms-md-0 mt-5">
            <div className={`d-flex justify-content-center info-container bg-${info.background}`}>
            <div className="me-3">
                <FontAwesomeIcon className="display-3" icon={faUserNurse} />
            </div>
            <div>
                <h5>{info.title}</h5>
                <p>{info.description}</p>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;