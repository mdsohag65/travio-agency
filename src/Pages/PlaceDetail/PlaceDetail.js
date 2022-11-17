import React from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetail = () => {
    const { placeId } = useParams();
    return (
        <div>
            <h2>welcome to detail:{placeId}</h2>
        </div>
    );
};

export default PlaceDetail;