'use client';

import React from 'react';
import { HiHome } from "react-icons/hi";
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BlogBreadCrumb = () => {
    return (
        <div className="rounded-lg flex items-center">
            <Link href="/" className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                <HiHome className="mr-2 text-gray-600" />
                Home
            </Link>
            <ChevronRight className="mx-2 text-gray-500 w-[18px]" /> {/* Separator */}
            <Link href="/blogs" className="text-indigo-600 font-semibold hover:text-indigo-700">
                Blogs
            </Link>
            <ChevronRight className="mx-2 text-gray-500 w-[18px]" /> {/* Separator */}
            <span className="text-gray-700 font-bold"></span>
        </div>
    );
}

export default BlogBreadCrumb;
