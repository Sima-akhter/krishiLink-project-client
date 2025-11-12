import { motion } from "framer-motion";
import { FaLeaf, FaHandshake, FaGlobe } from "react-icons/fa";

const AboutKrishiLink = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-green-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-green-600">KrishiLink</span>
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <strong>KrishiLink</strong> is a modern digital platform built to connect
          farmers and buyers across Bangladesh. It helps farmers sell their crops directly
          to consumers, access agricultural information, and grow their businesses with
          transparency and trust.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaLeaf className="text-green-700 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Farming</h3>
            <p className="text-gray-600">
              We promote sustainable agricultural practices that benefit both
              farmers and the environment.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaHandshake className="text-green-700 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Direct Connection</h3>
            <p className="text-gray-600">
              KrishiLink connects farmers and buyers directly — removing
              unnecessary middlemen for fairer prices.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaGlobe className="text-green-700 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Nationwide Access</h3>
            <p className="text-gray-600">
              Farmers from any region in Bangladesh can showcase and sell
              their produce online effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutKrishiLink;
