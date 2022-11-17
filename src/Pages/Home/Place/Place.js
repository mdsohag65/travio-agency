import React from 'react';
import './Place.css';

const Place = ({ place }) => {
    const { name, img, description, price } = place;
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure><img className='image' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{description}</p>
                <p className='text-accent'>Price: ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Review</button>
                </div>
            </div>
        </div>
    );
};

export default Place;