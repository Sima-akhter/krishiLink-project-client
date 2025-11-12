import React, { useEffect, useState } from 'react'
import { data } from 'react-router'

const RecievedInterest = ({ _id, owner }) => {

    const [interests, setInterests] = useState([])

    console.log(interests);
    



    useEffect(() => {
        fetch(`http://localhost:3000/krishiLink/${_id}/received-interests?email=${owner.ownerEmail}`)
            .then(res => res.json())
            .then(data => {
console.log(data);


                setInterests(data.interests)
            })
    }, [_id, owner.ownerEmail])

    return (
        <div>
            <h2>Received Interests for Product</h2>
            {interests.length === 0 ? (
                <p>No interests received yet.</p>
            ) : (
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">Buyer Name</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Message</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interests.map((interest) => (
                            <tr key={interest._id}>
                                <td className="border p-2">{interest.userName}</td>
                                <td className="border p-2">{interest.quantity}</td>
                                <td className="border p-2">{interest.message}</td>
                                <td className="border p-2">{interest.status}</td>
                                <td className="border p-2">
                                    
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded"
                                       
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                                        
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default RecievedInterest