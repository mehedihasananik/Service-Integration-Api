"use client"
import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'next-share';

const BlogSocialShare = () => {
    return (
        <div className="fixed left-[10%] top-[50%] transform -translate-y-1/2 z-50">
            <div className="flex flex-col items-center justify-center space-y-4">
                <FacebookShareButton
                    url={'https://envobyte.com/'}
                    quote={'next-share is a social share buttons for your next React apps.'}
                    hashtag={'#nextshare'}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={'https://envobyte.com/'}
                    quote={'next-share is a social share buttons for your next React apps.'}
                    hashtag={'#nextshare'}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton
                    url={'https://envobyte.com/'}
                    quote={'next-share is a social share buttons for your next React apps.'}
                    hashtag={'#nextshare'}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default BlogSocialShare