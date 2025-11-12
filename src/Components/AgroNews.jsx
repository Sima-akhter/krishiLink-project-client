import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaTractor, FaCloudRain, FaArrowRight } from "react-icons/fa";

const AgroNews = () => {
    const newsData = [
        {
            id: 1,
            icon: <FaCloudRain className="text-green-500 text-5xl mb-4" />,
            title: "Heavy Rain Affects Crop Growth",
            date: "November 10, 2025",
            description:
                "Experts warn that excessive rainfall may cause root rot in rice and wheat fields. Learn how to prevent it effectively.",
        },
        {
            id: 2,
            icon: <FaSeedling className="text-green-500 text-5xl mb-4" />,
            title: "New Hybrid Rice Variety Released",
            date: "November 9, 2025",
            description:
                "Scientists introduced a new rice variety that grows faster and produces 20% more yield with less water consumption.",
        },
        {
            id: 3,
            icon: <FaTractor className="text-green-500 text-5xl mb-4" />,
            title: "Farmers Embrace Smart Technology",
            date: "November 7, 2025",
            description:
                "Smart sensors and AI-based irrigation systems are transforming modern agriculture and improving productivity.",
        },
    ];

    return (
        <div className="py-16 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-green-700 mb-3 flex justify-center items-center gap-2"
                >
                    <FaLeaf className="text-green-600" /> Latest Agro News
                </motion.h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Stay informed about the latest agricultural trends, innovations, and farming tips that help you grow smarter and better.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((news, index) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition duration-300 text-center"
                        >
                            <div className="flex justify-center">{news.icon}</div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">
                                {news.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                            <p className="text-gray-700 text-sm mb-4">{news.description}</p>
                            <button className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium mx-auto">
                                Read More <FaArrowRight />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgroNews;
