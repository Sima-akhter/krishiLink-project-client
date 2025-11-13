import React, { use } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router'
import { AuthContext } from '../Provaider/AuthProvider'
import RecievedInterest from '../Components/RecievedInterest'
import InterestForm from '../Components/InterestForm'
import Swal from 'sweetalert2'

const CropsDetails = () => {
  const data = useLoaderData()
  const { user } = use(AuthContext)

  const krishiLink = data.result

  const { pricePerUnit, _id, owner } = krishiLink

  const navigate = useNavigate()

  const handleDelet = () => {


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

        fetch(`http://localhost:3000/krishiLink/${krishiLink._id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },

        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            navigate('/allCrops')


            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          })
          .catch(err => {
            console.log(err)
          })



      }
    });
  }



  return (
    <div>

      <div className="card lg:card-side bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <figure className="lg:w-1/3">
          <img
            src={krishiLink.image}
            alt={krishiLink.name}
            className="h-64 w-full object-cover"
          />
        </figure>
        <div className="card-body p-6 space-y-2">
          <h2 className="card-title text-2xl font-bold text-gray-800">
            {krishiLink.name}
          </h2>
          <p className="text-gray-500 font-medium">{krishiLink.type}</p>

          <p className="text-lg font-semibold text-green-600">
            💰 Price per unit: ${pricePerUnit}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {krishiLink.description}
          </p>

          <div className="card-actions justify-end mt-4 space-x-3">
            <Link
              to={`/updateCrops/${_id}`}
              className="btn text-white border-none bg-gradient-to-b from-green-500 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              Update
            </Link>
            <button
              onClick={handleDelet}
              className="btn  text-white border-none bg-gradient-to-b from-green-500 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {
        user.email === krishiLink.owner.ownerEmail ?
          <RecievedInterest _id={_id} owner={owner}></RecievedInterest> :
          <InterestForm pricePerUnit={pricePerUnit} _id={_id} owner={owner}></InterestForm>
      }


    </div>
  )
}

export default CropsDetails