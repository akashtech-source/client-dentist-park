import React from 'react';
import AboutHospital from './AboutHospital/AboutHospital';
import AllService from './AllService/AllService';
import CarePatient from './CarePatient/CarePatient';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Header/Navbar/Navbar';
import HeroService from './HeroService/HeroService';
import MakeAppoiontment from './MakeAppoiontment/MakeAppoiontment';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HeroService />
            <AllService />
            <CarePatient />
            <MakeAppoiontment />
            <AboutHospital />
            <Doctors />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;