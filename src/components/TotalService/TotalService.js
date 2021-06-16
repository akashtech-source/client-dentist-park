import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Dashboard/Dashboard/Sidebar/Sidebar';


const TotalService = () => {
    const [services, setServices] = useState([])
    const url = `https://pure-castle-85670.herokuapp.com/service`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                <p className="display-6 text-center mt-3">
                        Welcome Admin <br />
                        This is <span className="text-primary">All Booking List</span>
                    </p>
                    <table className="table table-borderless table-hover mt-4">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.name}</td>
                        <NavLink to={`/dashboard/${service._id}`}
                         className="actionBtn mt-3">Delete</NavLink>
                    </tr>
                    )
                }
            </tbody>
        </table>
                </div>
            </div>
        </div>
    );
};

export default TotalService;