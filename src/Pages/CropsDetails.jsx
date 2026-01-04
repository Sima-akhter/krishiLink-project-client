// import React, { use } from 'react'
// import { Link, useLoaderData, useNavigate } from 'react-router'
// import { AuthContext } from '../Provaider/AuthProvider'
// import RecievedInterest from '../Components/RecievedInterest'
// import InterestForm from '../Components/InterestForm'


// const CropsDetails = () => {
//   const data = useLoaderData()
//   const { user } = use(AuthContext)

//   const krishiLink = data.result

  
  

//   const { pricePerUnit, _id, owner, quantity, description } = krishiLink

//   return (
//     <div>

//       <div className="card lg:card-side bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
//         <figure className="lg:w-1/3">
//           <img
//             src={krishiLink.image}
//             alt={krishiLink.name}
//             className="h-64 w-full object-cover"
//           />
//         </figure>
//         <div className="card-body p-6 space-y-2">
//           <h2 className="card-title text-2xl font-bold text-gray-800">
//             {krishiLink.name}
//           </h2>
//           <p className="text-gray-500 font-medium">{krishiLink.type}</p>

//           <p className="text-lg font-semibold text-green-600">
//              Price per unit: ${pricePerUnit}
//           </p>

//           <p>Quantity:- {krishiLink.quantity}</p>

//           <p className="text-gray-600 leading-relaxed">
//             {krishiLink.description}
//           </p>

          
//         </div>
//       </div>

//       {
//         user.email === krishiLink.owner.ownerEmail ?
//           <RecievedInterest _id={_id} owner={owner}></RecievedInterest> :
//           <InterestForm pricePerUnit={pricePerUnit} _id={_id} owner={owner} availableQuantity={quantity}></InterestForm>
//       }


//     </div>
//   )
// }

// export default CropsDetails


import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../Provaider/AuthProvider'
import RecievedInterest from '../Components/RecievedInterest'
import InterestForm from '../Components/InterestForm'

const CropsDetails = () => {
  const data = useLoaderData()
  const { user } = use(AuthContext)

  const krishiLink = data.result

  const {
    _id,
    name,
    type,
    image,
    pricePerUnit,
    quantity,
    description,
    owner
  } = krishiLink

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

      {/* ===== Details Card ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden">

        <div className="flex flex-col lg:flex-row">

          {/* ===== Image Left ===== */}
          <div className="lg:w-1/2 h-[300px] lg:h-auto">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ===== Content Right ===== */}
          <div className="lg:w-1/2 p-8 space-y-6">

            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Category: {type}
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Price per Unit</p>
                <p className="text-xl font-semibold text-green-600">
                  ${pricePerUnit}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Available Quantity</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  {quantity}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Owner</p>
                <p className="text-base font-medium text-gray-800 dark:text-white">
                  {owner?.ownerName}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== Interest Section ===== */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-6">

        {
          user?.email === owner?.ownerEmail ? (
            <RecievedInterest _id={_id} owner={owner} />
          ) : (
            <InterestForm
              _id={_id}
              owner={owner}
              pricePerUnit={pricePerUnit}
              availableQuantity={quantity}
            />
          )
        }

      </div>

    </div>
  )
}

export default CropsDetails
