import React from 'react';

const Deal = ({ deal }) => {
    const { name, img } = deal;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Places" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-accent'>Limited offer upto 30% off!!</p>
                <div class="card-actions">
                    <button class="btn btn-secondary text-white">Visit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Deal;