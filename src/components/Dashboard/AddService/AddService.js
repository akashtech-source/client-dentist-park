import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)



    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            details: data.details,
            category: data.category,
            imageURL: imageURL
        }
        const url = `https://pure-castle-85670.herokuapp.com/addService`

        console.log(serviceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleLogoUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '053178664627fad5ef7c0d54ebc5c4a7');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-8 mt-5 ms-md-5">
                <p className="display-4 text-center mb-5">
                    Add an <span className="text-primary">Service</span>
                </p>
                <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue="Service Name" {...register("name")} />
                    <br/>
                <input className="form-control" defaultValue="Service Details" {...register("details")} />
                    <br/>
                <input className="form-control" defaultValue="service" {...register("category")} />
                    <br/>
                <input className="form-control"  type="file" onChange={handleLogoUpload}  />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-warning" type="submit" />
            </form>
                </div>
            </div>            
        </div>
    );
};

export default AddService;