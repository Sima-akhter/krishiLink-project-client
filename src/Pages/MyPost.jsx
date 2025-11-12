import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Provaider/AuthProvider'

const MyPost = () => {
    const { user } = use(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/my-posted?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="p-4">
            {products && products.length > 0 ? (
                <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                    
                    <table className="min-w-full divide-y divide-gray-200 hidden md:table">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">#</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Crop Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((krishilink, index) => (
                                <tr key={krishilink._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        <img 
                                            src={krishilink.image }
                                            alt={krishilink.name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{krishilink.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">${krishilink.pricePerUnit}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{krishilink.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="md:hidden divide-y divide-gray-200">
                        {products.map((krishilink, index) => (
                            <div
                                key={krishilink._id}
                                className="p-4 flex flex-col bg-white hover:bg-gray-50 transition"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-gray-600">
                                        #{index + 1} - {krishilink.name}
                                    </span>
                                    <span className="text-sm text-blue-600 font-medium">
                                        ${krishilink.pricePerUnit}
                                    </span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <img 
                                        src={krishilink.image }
                                        alt={krishilink.name}
                                        className="w-16 h-16 object-cover rounded-md mr-4"
                                    />
                                    <div className="text-sm text-gray-700 flex items-center gap-2">
                                        <p><strong>Quantity:</strong> {krishilink.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
