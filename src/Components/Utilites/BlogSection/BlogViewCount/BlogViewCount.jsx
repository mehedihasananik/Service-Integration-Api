"use client"
import { apiEndpoint } from '@/config/config'
import React, { useEffect, useState } from 'react'

const BlogViewCount = ({ params }) => {
    const [viewCount, setViewCount] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // console.log(viewCount)

    useEffect(() => {
        const fetchViewCount = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/blog/views/${params?.id}`)
                if (!response.ok) {
                    console.log(('Failed to fetch view count'))
                }
                const data = await response.json()
                setViewCount(data.views)
                setLoading(false)
            } catch (err) {
                console.error('Error fetching view count:', err)
                setError('Failed to load view count')
                setLoading(false)
            }
        }

        fetchViewCount()
    }, [params?.id])



    // if (error) {
    //     return <div>Error: {error}</div>
    // }

    return (
        <div className="flex items-center text-gray-500">
        </div>
    )
}

export default BlogViewCount