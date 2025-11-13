import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provaider/AuthProvider';

const InterestForm = ({ pricePerUnit, _id, availableQuantity }) => {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  useEffect(() => {
    if (user?.email) {
      fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${_id}`)
        .then((res) => res.json())
        .then((data) => {
          const alreadyInterested = data?.result?.interest?.some(
            (item) => item.userEmail === user.email
          );
          if (alreadyInterested) setIsSubmitted(true);
        })
        .catch((err) => console.error(err));
    }
  }, [user, _id]);

  const handleInterest = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      toast.error('Quantity must be at least 1.');
      return;
    }

    if(quantity>availableQuantity){
        toast.error("You can't exceed the available quantity!")
        return
    }

    const interestData = {
      userEmail: user?.email,
      userName: user?.displayName,
      quantity,
      message,
      status: 'pending',
    };

    fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${_id}/interest`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(interestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.modifiedCount > 0) {
          toast.success('Your interest has been submitted.');
          setQuantity(0);
          setMessage('');
          setIsSubmitted(true);
        } else {
          toast.error(data.message || 'You already submitted interest.');
          setIsSubmitted(true);
        }
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Submit Interest
      </h2>

      <form onSubmit={handleInterest} className="space-y-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message here..."
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <p className="text-lg font-semibold text-blue-600">
          Total Price: ${pricePerUnit * quantity}
        </p>

        <button
          type="submit"
          className="w-full btn text-white border-none bg-gradient-to-b from-green-500 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 font-semibold py-2 px-4 rounded-md"
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Already Submitted' : 'Submit Interest'}
        </button>
      </form>
    </div>
  );
};

export default InterestForm;
