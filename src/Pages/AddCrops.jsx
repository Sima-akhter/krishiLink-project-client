import React, { use } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../Provaider/AuthProvider'
import { useNavigate } from 'react-router'

const AddCrops = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name: e.target.name.value,
            type: e.target.type.value,
            pricePerUnit: e.target.pricePerUnit.value,
            unit: e.target.unit.value,
            quantity: e.target.quantity.value,
            description: e.target.description.value,
            location: e.target.location.value,
            image: e.target.image.value,
            owner: {
                ownerEmail: user.email,
                ownerName: user.displayName,
            },
            interest: []

        }

        fetch('http://localhost:3000/krishiLink', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('successfully added!')
                navigate('/my-posted')
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>

            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
                        Add New Crop
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Crop Name */}
                        <div>
                            <label className="label font-medium">Crop Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                placeholder="Enter crop name"
                            />
                        </div>

                        {/* Crop Type */}
                        <div>
                            <label className="label font-medium">Crop Type</label>
                            <select
                                defaultValue=""
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
                                className="input w-full rounded-full focus:border-green-400 focus:outline-green-400"
                                placeholder="Enter price per unit"
                            />
                        </div>

                        {/* Unit */}
                        <div>
                            <label className="label font-medium">Unit</label>
                            <select
                                defaultValue=""
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
                </div>
            </div>



        </div>
    )
}

export default AddCrops