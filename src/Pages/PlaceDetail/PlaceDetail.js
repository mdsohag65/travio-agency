import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlaceDetail.css';

const PlaceDetail = () => {
    const { placeId } = useParams();
    const [place, setPlace] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/place/${placeId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, [placeId]);
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl mx-10 my-24">
            <figure><img className='detail-image' src={place.img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title text-primary">{place.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, pariatur.</p>
                <div class="card-actions justify-end">
                    <label for="book-modal" class="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetail;