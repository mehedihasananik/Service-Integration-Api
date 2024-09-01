"use client"

import React, { useEffect, useState } from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditShareButton,
    RedditIcon
} from 'next-share';
import { Copy } from 'lucide-react';

const BlogSocialShare = ({ title, image }) => {
    const [shareUrl, setShareUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const currentUrl = window.location.href;
        setShareUrl(currentUrl);
    }, []);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <>
            <div className="hidden xl:block fixed left-2 3xl:left-[5%] 4xl:left-[10%] top-1/2 transform -translate-y-1/2 z-50">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title || 'Check out this awesome blog post!'}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title || 'Check out this awesome blog post!'}
                        hashtags={['nextshare']}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <PinterestShareButton
                        url={shareUrl}
                        media={image || ''}
                        description={title || 'Check out this awesome blog post!'}
                    >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <RedditShareButton
                        url={shareUrl}
                        title={'next-share is a social share buttons for your next React apps.'}
                    >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <button
                        onClick={handleCopyClick}
                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        title="Copy link"
                    >
                        <Copy size={20} />
                    </button>
                    {copied && (
                        <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                            Copied!
                        </div>
                    )}
                </div>
            </div>
            {/* small device */}
            <div className="block xl:hidden ">
                <div className="flex items-center justify-start pt-0 space-x-3 pb-8">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title || 'Check out this awesome blog post!'}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title || 'Check out this awesome blog post!'}
                        hashtags={['nextshare']}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <PinterestShareButton
                        url={shareUrl}
                        media={image || ''}
                        description={title || 'Check out this awesome blog post!'}
                    >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <RedditShareButton
                        url={shareUrl}
                        title={'next-share is a social share buttons for your next React apps.'}
                    >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <button
                        onClick={handleCopyClick}
                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        title="Copy link"
                    >
                        <Copy size={20} />
                    </button>
                    {copied && (
                        <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                            Copied!
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BlogSocialShare