import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import Loading from "./Loading";

const MyInterest = () => {
  const { user } = useContext(AuthContext);
  const [interestedProducts, setInterestedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch("https://krishi-link-project-server.vercel.app/krishiLink")
      .then((res) => res.json())
      .then((data) => {
        const myInterests = data.filter(
          (item) =>
            Array.isArray(item.interest) &&
            item.interest.some(
              (interest) => interest.userEmail === user.email
            )
        );
        setInterestedProducts(myInterests);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);


  const sortedProducts = [...interestedProducts].sort((a, b) => {
    const interestA = a.interest.find((i) => i.userEmail === user.email);
    const interestB = b.interest.find((i) => i.userEmail === user.email);

    const totalA =
      Number(a.pricePerUnit) * Number(interestA?.quantity || 0);
    const totalB =
      Number(b.pricePerUnit) * Number(interestB?.quantity || 0);

    return sortOrder === "asc" ? totalA - totalB : totalB - totalA;
  });

  
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 sm:mb-0 text-center sm:text-left">
          My Interested Products
        </h2>

        <button
          onClick={toggleSortOrder}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md shadow transition"
        >
          Sort by Total Price:{" "}
          {sortOrder === "asc" ? "Low → High" : "High → Low"}
        </button>
      </div>

      {interestedProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t shown interest in any products yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Product Name</th>
                <th className="py-3 px-4 text-left">Owner</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Message</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left cursor-pointer">
                  Total Price
                </th>
              </tr>
            </thead>

            <tbody>
              {sortedProducts.map((product) => {
                const myInterest = product.interest.find(
                  (i) => i.userEmail === user.email
                );
                const totalPrice =
                  Number(product.pricePerUnit) *
                  Number(myInterest?.quantity || 0);

                return (
                  <tr
                    key={product._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {product.name}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {product.owner?.ownerName}
                    </td>
                    <td className="py-3 px-4 text-gray-700 text-center">
                      {myInterest?.quantity}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {myInterest?.message}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          myInterest?.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : myInterest?.status === "accepted"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {myInterest?.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700 font-semibold">
                      ${totalPrice}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyInterest;
