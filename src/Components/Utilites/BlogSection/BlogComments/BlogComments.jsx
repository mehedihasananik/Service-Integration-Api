"use client"

import React from 'react';
import { MessageCircle, Clock, CornerDownRight } from 'lucide-react';

const BlogComments = ({ id, comments }) => {
    return (
        <div className="w-full p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <MessageCircle className="mr-2 text-indigo-600" size={24} />
                Comments ({comments.length})
            </h3>
            {comments.length === 0 ? (
                <p className="text-gray-500">No comments yet.</p>
            ) : (
                <div className="space-y-8">
                    {comments.map(comment => (
                        <div key={comment.id} className="space-y-4">
                            <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:bg-gray-100 ">
                                <div className="flex space-x-4">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm md:text-lg">
                                        {comment.user_name[0]}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex space-x-2 mb-2">
                                            <span className="font-bold text-gray-800 text-sm md:text-lg">{comment.user_name}</span>
                                            <span className="text-xs md:text-sm text-gray-500 flex items-center ">
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
                                </div>
                            </div>

                            {/* Replies */}
                            {comment.replies.length > 0 && (
                                <div className="md:ml-12 space-y-4">
                                    {comment.replies.map((reply, index) => (
                                        <div key={index} className="bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:bg-blue-100 ">
                                            <div className="flex items-start space-x-3">
                                                <CornerDownRight className="text-blue-500 mt-1" size={16} />
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                                                            E
                                                        </div>
                                                        <span className="font-semibold text-gray-800">Envobyte</span>
                                                        <span className="text-xs text-gray-500 flex items-center">
                                                            <Clock className="mr-1" size={12} />
                                                            {new Date(reply.created_at).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 leading-relaxed ml-10">{reply.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogComments;