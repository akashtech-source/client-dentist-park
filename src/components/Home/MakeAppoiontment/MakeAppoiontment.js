import React from 'react';
import appointmentPic from '../../../images/appointment-1.jpg'
import { useForm } from "react-hook-form";
import './MakeAppointment.css';
const MakeAppoiontment = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="d-flex justify-content-center">
            <div className="row mt-5">
                <div className="col-md-4 ms-md-5 ms-5">
                    <img className="rounded img-fluid" img src={appointmentPic} alt="" />
                </div>
                <div className="col-md-6 ms-md-0 me-md-5  appointment-container rounded">
                    <p className="display-4">Make An <span className="text-info">Appointment</span></p>
                    <p className="display-6">On {' '} 
                    <span className="text-danger">
                        {new Date().toDateString()}
                    </span>
                        </p>
                    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="form-control" placeholder="Enter Name" {...register("name")} />
                        
                        <br />
                        <input className="form-control" placeholder="Enter Email" {...register("email")} />
                        
                        <br />
                        <input className="form-control" placeholder="Enter Phone"  {...register("phone", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <input className="btn btn-info fs-5 text-white" type="submit" />
                        </form>
                    </div>
                    </div>
        </div>
    );
};

export default MakeAppoiontment;