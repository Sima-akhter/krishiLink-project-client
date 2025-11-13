import { FaLeaf, FaHandshake, FaGlobe } from "react-icons/fa";

const AboutKrishiLink = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          About <span className="text-green-600">KrishiLink</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          <strong>KrishiLink</strong> is a modern digital platform built to connect
          farmers and buyers across Bangladesh. It helps farmers sell their crops directly
          to consumers, access agricultural information, and grow their businesses with
          transparency and trust.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <FaLeaf className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Farming</h3>
            <p className="text-gray-600">
              We promote sustainable agricultural practices that benefit both
              farmers and the environment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <FaHandshake className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Direct Connection</h3>
            <p className="text-gray-600">
              KrishiLink connects farmers and buyers directly — removing
              unnecessary middlemen for fairer prices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <FaGlobe className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Nationwide Access</h3>
            <p className="text-gray-600">
              Farmers from any region in Bangladesh can showcase and sell
              their produce online effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKrishiLink;
