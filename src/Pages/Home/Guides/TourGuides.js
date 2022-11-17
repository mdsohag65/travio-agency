import React from 'react';
import guide1 from '../../../images/guides/guide1.jpg';
import guide2 from '../../../images/guides/guide2.jpg';
import guide3 from '../../../images/guides/guide3.jpg';
import guide4 from '../../../images/guides/guide4.jpg';
import guide5 from '../../../images/guides/guide5.jpg';
import guide6 from '../../../images/guides/guide6.jpg';
import Guide from '../Guide/Guide';

const guides = [
    { id: 1, name: "Edward Harry", img: guide1 },
    { id: 2, name: "Samuel Johnson", img: guide2 },
    { id: 3, name: "Edmund Swift", img: guide3 },
    { id: 4, name: "Chris Lin", img: guide4 },
    { id: 5, name: "Natasha k", img: guide5 },
    { id: 6, name: "MJ", img: guide6 },
]
const TourGuides = () => {
    return (
        <section>
            <h1 className='text-3xl font-bold text-center mb-3 mt-6'>Tour <span className='text-primary'>Guides</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-10'>
                {
                    guides.map(guide => <Guide
                        key={guide.id}
                        guide={guide}
                    ></Guide>)
                }
            </div>
        </section>
    );
};

export default TourGuides;