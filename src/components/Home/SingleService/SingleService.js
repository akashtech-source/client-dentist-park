import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';
import './SingleService.css'

const SingleService = (props) => {
    const {name, _id, details, imageURL} = props.service
    return (
        <div className="col-md-4">
            <div>
            <div class="card card-service" style={{width: '25rem'}}>
            <div className="product-image">
            <img src={imageURL} class="card-img-top serviceImg" alt="..."/>
            </div>
            <div class="card-body">
                <h3 className="text-danger">{name}</h3>
                <p class="fs-5 card-text">{details}</p>
                <Link to={`/dashboard/${_id}`} className="btn btn-info text-white fs-5">Book Now</Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SingleService;