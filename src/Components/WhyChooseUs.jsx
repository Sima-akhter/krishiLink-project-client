import { FaBolt, FaShieldAlt, FaSmile } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Why Choose <span className="text-green-600">KrishiLink?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaBolt className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Fast & Easy</h3>
            <p className="text-gray-600">
              Post your crops, connect with buyers, and make deals in just a few clicks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaShieldAlt className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Your personal data and transactions are protected with top-notch security measures.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaSmile className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">User Friendly</h3>
            <p className="text-gray-600">
              Designed for simplicity — even first-time users can navigate the platform with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
