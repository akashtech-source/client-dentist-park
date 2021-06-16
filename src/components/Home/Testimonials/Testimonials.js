import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/review-3.jpg';
import ema from '../../../images/review-2.jpg';
import aliza from '../../../images/review-1.jpg';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
       <main className="testimonials-container ms-md-0 ">
           <section className="testimonials container my-5 py-5">
           <div className="service-text mt-5">
                <h5 style={{
                borderRadius: '30px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 30px lightgrey',
                width: '300px',
                textAlign: 'center',
                padding:'10px'
                 }}
                 ><span className="text-success">#</span> Our Clients Review</h5>
            </div>
           <div className=" mt-5">
               <div className="section-header">
                   <p className="display-4">
                        Real Review From Our <br />
                        <span className="text-primary">
                        Real Customer
                        </span>
                    </p>
               </div>
               <div className="card-deck  row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
       </main>
    );
};

export default Testimonials;