import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Provaider/AuthProvider'
import AllCropsCard from './AllCropsCard'

const MyPost = () => {
    const { user } = use(AuthContext)

    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {
        fetch(`http://localhost:3000/my-posted?email=${user.email}`)
            .then(res => res.json())
            .then(data => { setProducts(data), console.log(data) })
    }, [])

    return (
        <div>
            {products && products.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {products.map(krishilink => (
                        <AllCropsCard key={krishilink._id} krishiLink={krishilink} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-[40vh]'>
                    <h4>Data is not found</h4>
                </div>
            )}
        </div>
    )
}

export default MyPost