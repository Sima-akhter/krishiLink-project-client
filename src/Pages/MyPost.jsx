import React, { useEffect, useRef, useState, useContext } from 'react'
import { AuthContext } from '../Provaider/AuthProvider'
import Swal from 'sweetalert2'
import Loading from './Loading'

const MyPost = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const modalRef = useRef(null)

    useEffect(() => {
        if (user?.email) {
            setLoading(true)
            fetch(`https://krishi-link-project-server.vercel.app/my-posted?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                    setLoading(false)
                }
                )
        }
    }, [user?.email])

    const handleModalOpen = (product) => {
        setSelectedProduct(product)
        modalRef.current.showModal()
    }

    const handleModalClose = () => {
        modalRef.current.close()
        setSelectedProduct(null)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const form = e.target
        const updatedProduct = {
            name: form.name.value,
            type: form.type.value,
            pricePerUnit: form.pricePerUnit.value,
            unit: form.unit.value,
            quantity: form.quantity.value,
            description: form.description.value,
            location: form.location.value,
            image: form.image.value,
        }

        fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${selectedProduct._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0 || data.success) {
                    setProducts(prev =>
                        prev.map(item =>
                            item._id === selectedProduct._id ? { ...item, ...updatedProduct } : item
                        )
                    )
                    Swal.fire("Updated!", "Product has been updated successfully!", "success")
                    handleModalClose()
                }
            })
            .catch(err => console.error(err))
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                    },

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0 || data.success || data.acknowledged) {
                            setProducts(prev => prev.filter(item => item._id !== id))

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }



                    })
                    .catch(err => {
                        console.log(err)
                    })



            }
        });
    }

    if(loading) return <Loading></Loading>

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
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((krishilink, index) => (
                                <tr key={krishilink._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        <img src={krishilink.image} alt={krishilink.name} className="w-20 h-20 object-cover rounded-md" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{krishilink.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">${krishilink.pricePerUnit}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{krishilink.quantity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 space-x-2">
                                        <button
                                            onClick={() => handleModalOpen(krishilink)}
                                            className="bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(krishilink._id)}

                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-[40vh]'>
                    <h4 className='text-4xl text-red-700 font-bold'>Data not found</h4>
                </div>
            )}

            {/* ======= MODAL ======= */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-info text-lg mb-3">Update Your Product</h3>

                    {selectedProduct && (
                        <form key={selectedProduct._id} onSubmit={handleEdit} className="space-y-4">
                            {/* Crop Name */}
                            <div>
                                <label className="label font-medium">Crop Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    defaultValue={selectedProduct.name}
                                    className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                    placeholder="Enter crop name"
                                />
                            </div>

                            {/* Crop Type */}
                            <div>
                                <label className="label font-medium">Crop Type</label>
                                <select
                                    defaultValue={selectedProduct.type}
                                    name="type"
                                    required
                                    className="select w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                >
                                    <option value="" disabled>
                                        Select type
                                    </option>
                                    <option value="Vegetable">Vegetable</option>
                                    <option value="Fruit">Fruit</option>
                                    <option value="Grain">Grain</option>
                                    <option value="Spice">Spice</option>
                                    <option value="Flower">Flower</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Price per unit */}
                            <div>
                                <label className="label font-medium">Price per Unit</label>
                                <input
                                    type="number"
                                    name="pricePerUnit"
                                    required
                                    defaultValue={selectedProduct.pricePerUnit}
                                    className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                    placeholder="Enter price per unit"
                                />
                            </div>

                            {/* Unit */}
                            <div>
                                <label className="label font-medium">Unit</label>
                                <select
                                    defaultValue={selectedProduct.unit}
                                    name="unit"
                                    required
                                    className="select w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                >
                                    <option value="" disabled>
                                        Select unit
                                    </option>
                                    <option value="kg">Kilogram (kg)</option>
                                    <option value="ton">Ton</option>
                                    <option value="bag">Bag</option>
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="label font-medium">Estimated Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    required
                                    defaultValue={selectedProduct.quantity}
                                    className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                    placeholder="Enter estimated quantity"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="label font-medium">Description</label>
                                <textarea
                                    name="description"
                                    required
                                    rows="3"
                                    defaultValue={selectedProduct.description}
                                    className="textarea w-full rounded-2xl focus:border-green-400 focus:outline-green-400 h-[200px]"
                                    placeholder="Enter description"
                                ></textarea>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="label font-medium">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    defaultValue={selectedProduct.location}
                                    className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                    placeholder="Enter crop location (e.g., Bogura)"
                                />
                            </div>

                            {/* Image URL */}
                            <div>
                                <label className="label font-medium">Image URL</label>
                                <input
                                    type="url"
                                    name="image"
                                    required
                                    defaultValue={selectedProduct.image}
                                    className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn w-full text-white border-none bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300"
                            >
                                Add Crop
                            </button>
                        </form>
                    )}
                </div>
            </dialog>
        </div>
    )
}

export default MyPost
