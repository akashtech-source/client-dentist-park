import React from 'react';
import sliderOne from '../../../images/slides-bg1.jpg'
import sliderTwo from '../../../images/slides-bg2.jpg'
import sliderThree from '../../../images/slides-bg3.jpg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
            <div className="text-slider">
            <h6 className="bg-white text-center w-50 p-2 round mt-md-5 mt-1 ms-5">
                <span className="text-success">#</span> Keeping Teeth Clean</h6>
                <h1 className="display-1 pt-md-4 ms-md-5 "
                >Personalized <br />
                Dental <span className="text-info">Care</span></h1>
                <p className="ms-md-5 fs-5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Reiciendis, exercitationem explicabo eligendi enim fuga <br /> natus quis aliquid molestiae placeat, modi unde tenetur, maxime at minus!</p>
                <button className="btn btn-info p-3 text-white fs-5 mt-md-5 ms-md-5">Book Appointment</button>
            </div>
      <img src={sliderOne} class="d-block w-100 sliderImg" alt="..."/>
      
    </div>
    <div class="carousel-item">
    <div className="text-slider">
            <h6 className="bg-white text-center w-50 p-2 round mt-md-5 mt-1 ms-5">
                <span className="text-success">#</span> Keeping Teeth Clean</h6>
                <h1 className="display-1 pt-md-4 ms-md-5 "
                >Exceptional <br />
                Care for <span className="text-info">Woman</span></h1>
                <p className="ms-md-5 fs-5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Reiciendis, exercitationem explicabo eligendi enim fuga <br /> natus quis aliquid molestiae placeat, modi unde tenetur, maxime at minus!</p>
                <button className="btn btn-info p-3 text-white fs-5 mt-md-5 ms-md-5">Book Appointment</button>
            </div>
      <img src={sliderTwo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <div className="text-slider">
            <h6 className="bg-white text-center w-50 p-2 round mt-md-5 mt-1 ms-5">
                <span className="text-success">#</span> Keeping Teeth Clean</h6>
                <h1 className="display-1 pt-md-4 ms-md-5 "
                >Your Health is <br />
                Our Top <span className="text-info">Priority</span></h1>
                <p className="ms-md-5 fs-5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Reiciendis, exercitationem explicabo eligendi enim fuga <br /> natus quis aliquid molestiae placeat, modi unde tenetur, maxime at minus!</p>
                <button className="btn btn-info p-3 text-white fs-5 mt-md-5 ms-md-5">Book Appointment</button>
            </div>
      <img src={sliderThree} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Header;