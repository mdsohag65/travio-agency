import React from 'react';

const Guide = ({ guide }) => {
    const { img, name } = guide;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='guide-img' src={img} alt="Guides" /></figure>
            <div class="card-body">
                <h2 class="card-title text-neutral">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eveniet?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white">Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Guide;