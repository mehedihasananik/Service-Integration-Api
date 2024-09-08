"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { MessageCircle, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { apiEndpoint } from '@/config/config';
import ReCAPTCHA from "react-google-recaptcha";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .matches(/^[a-zA-Z][a-zA-Z\s]*\d*$/, 'Name cannot start with special characters or numbers'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required')
        .matches(/^[^\d].*\.com$/, "Email can't start with a number & must end with .com"),
    website: Yup.string()
        .optional()
        .matches(/^$|^.*\.[a-z]{2,}$/i, 'Website must end with a dot followed by a domain (e.g., .com, .org)'),
    comment: Yup.string()
        .required('Comment is required')
        .max(2000, 'Comment must not exceed 2000 characters'),
});

const BlogContactForm = ({ id }) => {
    console.log(id);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const onSubmit = async (data) => {
        if (!captchaVerified) {
            toast.error("Please complete the reCAPTCHA verification before submitting.");
            return;
        }

        try {
            await validationSchema.validate(data, { abortEarly: false });

            setIsSubmitting(true);

            const payload = {
                content: data.comment,
                user_name: data.name,
                user_email: data.email,
                website: data.website || '',
                post_id: id,
            };

            const response = await fetch(`${apiEndpoint}/blog/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success('You have successfully submitted a comment & we will get back to you');
                reset();
                setCaptchaVerified(false);
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to send message');
            }
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                error.inner.forEach((err) => {
                    toast.error(err.message);
                });
            } else {
                console.error('Error submitting form:', error);
                toast.error('An error occurred while sending the message');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full p-2 pb-8 md:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <MessageCircle className="mr-2 text-indigo-600" size={24} />
                Add A Comment
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-gray-50 focus:ring-2 focus:ring-indigo-200 transition-all duration-300`}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="flex-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-gray-50 focus:ring-2 focus:ring-indigo-200 transition-all duration-300`}
                            placeholder="john@example.com"
                            required
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Your Website (optional)</label>
                    <input
                        type="text"
                        id="website"
                        {...register('website')}
                        className={`w-full p-3 border rounded-lg ${errors.website ? 'border-red-500' : 'border-gray-300'} bg-gray-50 focus:ring-2 focus:ring-indigo-200 transition-all duration-300`}
                        placeholder="https://example.com"
                    />
                    {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website.message}</p>}
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                        required
                        id="comment"
                        {...register('comment')}
                        rows="4"
                        className={`w-full p-3 border rounded-lg ${errors.comment ? 'border-red-500' : 'border-gray-300'} bg-gray-50 focus:ring-2 focus:ring-indigo-200 transition-all duration-300`}
                        placeholder="Write your message here..."
                    ></textarea>
                    {errors.comment && <p className="mt-1 text-sm text-red-500">{errors.comment.message}</p>}
                </div>
                <div>
                    <ReCAPTCHA
                        sitekey="6LeHdPIpAAAAAJoof-1ewzeYES0jvTrJ9_g09hBQ"
                        onChange={handleCaptchaChange}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center"
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                            <Send className="mr-2" size={18} />
                            Comment Now
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default BlogContactForm;