import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import usePlaces from '../../hooks/usePlaces';

const ManagePlace = () => {
    const [places, setPlaces] = usePlaces();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/place/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = places.filter(place => place._id !== id);
                    setPlaces(remaining);
                    toast("Delete successfully");
                })
        }
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-4'>Manage Your Place</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            places.map((p, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td><button onClick={() => handleDelete(p._id)} class="btn btn-sm btn-outline btn-accent">delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManagePlace;