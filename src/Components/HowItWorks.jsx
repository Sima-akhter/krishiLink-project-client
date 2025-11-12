import { FaSeedling, FaShoppingBasket, FaHandshake, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <FaSeedling className="text-green-600 text-5xl mb-4" />,
            title: "1. Post Your Crop",
            description:
                "Farmers can easily add their fresh crops by sharing details like name, type, price, and location.",
        },
        {
            id: 2,
            icon: <FaShoppingBasket className="text-yellow-600 text-5xl mb-4" />,
            title: "2. Browse & Search",
            description:
                "Buyers can explore all available crops using search and filters to find what they need.",
        },
        {
            id: 3,
            icon: <FaHandshake className="text-blue-600 text-5xl mb-4" />,
            title: "3. Send Interest",
            description:
                "Interested buyers can send an interest request to the farmer mentioning quantity and message.",
        },
        {
            id: 4,
            icon: <FaTruck className="text-orange-600 text-5xl mb-4" />,
            title: "4. Connect & Trade",
            description:
                "Once the farmer accepts the request, both parties connect to complete the deal safely.",
        },
    ];

    return (
        <div className="py-16 bg-gradient-to-b from-green-50 to-white mt-10">
            <div className="max-w-6xl mx-auto px-6 text-center ">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-green-700 mb-4"
                >
                    🌱 How KrishiLink Works
                </motion.h2>
                <p className="text-gray-600 mb-12">
                    A simple and transparent way to connect farmers and buyers — from posting crops to final trade.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex flex-col items-center">
                                {step.icon}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
