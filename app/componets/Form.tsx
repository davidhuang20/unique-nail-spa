'use client'

import React, { useState } from 'react';
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    description: string;
}
const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
    });
    console.log(formData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission (e.g., send data to a server)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Process form data here
    };
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-full'>
            <div className='flex flex-row items-center'>
                <div className='flex flex-col w-1/2'>
                    <label htmlFor='firstName' className='block text-2xl'>
                        First Name 
                    </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='flex flex-col  w-1/2'>
                    <label htmlFor='lastName' className='block text-2xl'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
            </div>
            <div
                className='flex flex-col md:w-1/2 pl-4 md:pl-0'>
                <label htmlFor='email' className='block text-gray-700 mb-2'>
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
            <div
                className='flex flex-col mt-4'>
                <label htmlFor='description' className='block text-gray-700
                 mb-2'>
                    Description
                </label>
                <textarea
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
            <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4'>
                Submit
            </button>
        </form>
    );
};

export default Form;