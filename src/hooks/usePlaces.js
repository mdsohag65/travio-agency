import { useEffect, useState } from "react";

const usePlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/place')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);
    return [places, setPlaces]
}

export default usePlaces;