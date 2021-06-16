import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';


const AllService = () => {
    const [services, setServices] = useState([]);
    const url = `https://pure-castle-85670.herokuapp.com/service`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div>
            
            <div className="service-text ms-5">
                <h5 style={{
                borderRadius: '30px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 30px lightgrey',
                width: '300px',
                textAlign: 'center',
                padding:'10px'
                 }}
                 ><span className="text-success">#</span> Our Best Dental Service</h5>
                <div className="display-4">
                Enjoy Specialized Care Through <br />
                Precision, Artistry, and Experience
                </div>
            </div>
                <div className="d-flex mt-5 container-fluid justify-content-center">
                    <div className="row ms-3 g-4">
                        {
                         services.map(service => <SingleService service={service}></SingleService>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default AllService;