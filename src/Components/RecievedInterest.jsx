import React, { useEffect, useState } from 'react'

const RecievedInterest = ({ _id, owner }) => {
    const [interests, setInterests] = useState([])
    const [quantity, setQuantity] = useState(null)

    useEffect(() => {
        fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${_id}/received-interests?email=${owner.ownerEmail}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setInterests(data.interests)
                }
            })
    }, [_id, owner.ownerEmail])

    const handleStatusUpdate = (interestId, newStatus) => {
        fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${_id}/interest-status`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ interestId, status: newStatus }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    
                    setInterests(prev =>
                        prev.map(i =>
                            i._id === interestId ? { ...i, status: newStatus } : i
                        )
                    )
                    
                    if (data.newQuantity) setQuantity(data.newQuantity)
                }
            })
    }

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
                Received Interests
            </h2>

            {quantity && (
                <p className="text-green-700 font-semibold mb-3">
                    Remaining Quantity: {quantity}
                </p>
            )}

            {interests.length === 0 ? (
                <p>No interests received yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th className="py-2 px-3 text-left">Buyer Name</th>
                                <th className="py-2 px-3 text-left">Quantity</th>
                                <th className="py-2 px-3 text-left">Message</th>
                                <th className="py-2 px-3 text-left">Status</th>
                                <th className="py-2 px-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interests.map((interest) => (
                                <tr key={interest._id} className="border-b hover:bg-gray-50">
                                    <td className="border px-3 py-2">{interest.userName}</td>
                                    <td className="border px-3 py-2">{interest.quantity}</td>
                                    <td className="border px-3 py-2">{interest.message}</td>
                                    <td className="border px-3 py-2">
                                        <span
                                            className={`px-2 py-1 rounded text-sm font-medium ${interest.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : interest.status === "accepted"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {interest.status}
                                        </span>
                                    </td>
                                    <td className="border px-3 py-2">
                                        {interest.status === "pending" ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleStatusUpdate(interest._id, "accepted")
                                                    }
                                                    className="bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 text-white px-3 py-1 rounded mr-2"
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleStatusUpdate(interest._id, "rejected")
                                                    }
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        ) : (
                                            <span className="text-gray-400 italic">
                                                Action completed
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default RecievedInterest
