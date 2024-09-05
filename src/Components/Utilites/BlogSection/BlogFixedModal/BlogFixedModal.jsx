"use client";
import React, { useState } from 'react';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { apiEndpoint } from '@/config/config';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters")
        .matches(
            /^[a-zA-Z][a-zA-Z\s]*\d*$/,
            "Name cannot start with special characters or numbers"
        ),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email")
        .matches(
            /^[^\d].*\.com$/,
            "Email can't start with a number & must end with .com"
        ),
});

const BlogFixedModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (error) setError('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) setError('');
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = { name, email };

        try {
            await validationSchema.validate(formData, { abortEarly: false });

            const response = await fetch(`${apiEndpoint}/subscribe/newsletter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Thank you for subscribing!');
                setName('');
                setEmail('');
                setError('');
            } else {
                const errorData = await response.json();
                const errorMessage = errorData.errors?.email?.[0] || 'Failed to subscribe.';
                setError(`Error: ${errorMessage}`);
                toast.error(`Error: ${errorMessage}`);
            }
        } catch (err) {
            if (err.name === 'ValidationError') {
                err.inner.forEach((validationError) => {
                    toast.error(validationError.message);
                });
            } else {
                setError('Network error. Please try again later.');
                toast.error('Network error. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            <div className="flex justify-center items-center bg-gray-100">
                <div className="relative bg-white p-5 rounded-lg shadow-lg w-full max-w-lg mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-4 ">
                            Subscribe to receive our latest newsletters and special offers
                        </h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={handleSubscribe} className="w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={handleNameChange}
                                className="block w-[100%] p-2 mb-4 rounded-md border border-gray-300 text-gray-700"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={handleEmailChange}
                                className="block w-[100%] p-2 mb-4 rounded-md border border-gray-300 text-gray-700"
                                required
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mt-2 w-[50%] border bg-[#FF693B] text-white hover:bg-[#fff] py-2 rounded-md hover:text-[#FF693B] font-semibold transition-all delay-100 border-[#FF693B]"
                            >
                                {isLoading ? (
                                    <span className="flex justify-center items-center">
                                        Subscribing...
                                        <svg className="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                    </span>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogFixedModal;
