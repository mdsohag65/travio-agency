import React from 'react';
import notFound from '../../../images/notFound.webp';

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto' style={{ width: "800px" }} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;