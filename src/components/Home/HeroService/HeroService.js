import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Certified Dentist',
        description: 'Proin gravida nibh velit auctor aliquet aenean.',
        icon: 'faUserNurse',
        background: 'info'
    },
    {
        title: 'New Technology',
        description: 'Proin gravida nibh velit auctor aliquet aenean.',
        icon: 'faMicroscope',
        background: 'danger'
    },
    {
        title: 'Accept Insurance',
        description: 'Proin gravida nibh velit auctor aliquet aenean.',
        icon: 'faHouseDamage',
        background: 'primary'
    },
]

const HeroService = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-100 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default HeroService;