import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddPlace = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/place`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast("Place Added Successfully");
            })
    };
    return (
        <div className='sm:ml-11 md:ml-16 lg:ml-48 my-16'>
            <h2 className='text-2xl font-bold'>Add A Place</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Place Name' className='w-full max-w-xs border mt-5 rounded p-3' {...register("name")} />
                <textarea placeholder='Enter Description' className='w-full max-w-xs border mt-5 rounded' {...register("description")} />
                <input placeholder='Price' className='w-full max-w-xs border mt-5 rounded p-3' type="number" {...register("price")} />
                <input placeholder='Photo URL' className='w-full max-w-xs border mt-5 rounded p-3' type="text" {...register("img")} />
                <input className='btn btn-primary w-full max-w-xs mt-5' type="submit" value="Add" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddPlace;