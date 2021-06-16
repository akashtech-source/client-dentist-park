import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookingData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            date: data.date,
            service: service.name,
            book: new Date().toDateString()
        };
        const url = `http://localhost:5000/addBooking`
        console.log(bookingData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => console.log('server side', res))

    };
    const {id} = useParams()
   
    const [service, setService] = useState({});
    const url = `http://localhost:5000/service/${id}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data[0]))
    },[])


    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-8 mt-3">
                <div className="text-center">
                
                <p className="display-5">Hello <span style={{fontWeight: '600'}} className="text-info">{loggedInUser.name}</span></p>
                <div style={{textAlign: 'center', marginBottom: '15px'}}>
                    <img style={{borderRadius: '50%'}} src={loggedInUser.photoURL} alt="" />
                </div>
                <h2>Your Booking is: {service.name} </h2>
                </div>
                
                <div className="mt-5 ms-md-5">
                <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
        
                    <input className="form-control" defaultValue="Farhan Ahmed" {...register("name")} />
                    <br />
                    <input className="form-control" defaultValue="01234-56789" {...register("phone")} />
                    <br />
                    <input className="form-control" defaultValue="Enter Your Email" {...register("email")} />
                    <br />
                    <input className="form-control" type="date" {...register("date", { required: true })} />
                    <br />
                    <input className="btn btn-success" type="submit" />
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;