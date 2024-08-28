"use client"

import React, { useEffect, useState } from 'react';
import { MessageCircle, Clock, CornerUpRight } from 'lucide-react';

const BlogComments = ({ id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://v2admin.envobyte.com/api/posts/${id}/comments`);
                if (!response.ok) {
                    throw new Error('Failed to fetch comments');
                }
                const data = await response.json();
                setComments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [id]);

    if (isLoading) {
        return <div className="text-center">Loading comments...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="w-full p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <MessageCircle className="mr-2 text-indigo-600" size={24} />
                Comments ({comments.length})
            </h3>
            {comments.length === 0 ? (
                <p className="text-gray-500">No comments yet.</p>
            ) : (
                <ul className="space-y-8">
                    {comments.map(comment => (
                        <li key={comment.id} className="flex space-x-4 bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:bg-gray-100">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                                {comment.user_name[0]}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col mb-2">
                                    <span className="font-bold text-gray-800 text-lg">{comment.user_name}</span>
                                    <span className="text-sm text-gray-500 flex items-center">
                                        <Clock className="mr-1" size={14} />
                                        {new Date(comment.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlogComments;