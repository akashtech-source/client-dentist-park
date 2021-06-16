import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Dashboard/Sidebar/Sidebar'


const AllBooking = () => {
    const [booking, setBooking] = useState([])
    const url = `http://localhost:5000/booking`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 mt-3">
                    <p className="display-6 text-center">
                        Welcome Admin <br />
                        This is <span className="text-primary">All Booking List</span>
                    </p>
                <table className="table table-success table-striped mt-4">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Booking</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Appointment On</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  booking.map((book, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{book.phone}</td>
                        <td>{book.service}</td>
                        <td>{book.email}</td>
                        <td>{book.date}</td>
                        <td className="text-success text-bold">Pending</td>
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

export default AllBooking;