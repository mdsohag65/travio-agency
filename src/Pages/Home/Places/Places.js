import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/place')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className='my-9'>
            <h2 className='text-3xl text-center font-bold mb-3'>Visit <span className='text-secondary'>Places</span></h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10'>
                {
                    places.map(place => <Place
                        key={place._id}
                        place={place}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;