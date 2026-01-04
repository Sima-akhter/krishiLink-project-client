const AgroNewsBlogs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Section Heading ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-800">
            Agro News & <span className="text-green-600">Blogs</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest agricultural news, expert insights,
            and farming success stories.
          </p>
        </div>

        {/* ===== Blog Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b"
              alt="Agro Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-green-600 font-medium">
                Crop Updates
              </p>
              <h3 className="text-lg font-semibold text-green-800">
                Modern Farming Techniques
              </h3>
              <p className="text-gray-600 text-sm">
                New methods to increase crop yield sustainably.
              </p>
              <button className="text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Agro Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-green-600 font-medium">
                Market News
              </p>
              <h3 className="text-lg font-semibold text-green-800">
                Daily Crop Price Trends
              </h3>
              <p className="text-gray-600 text-sm">
                Latest agricultural market insights.
              </p>
              <button className="text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              alt="Agro Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-green-600 font-medium">
                Farmer Stories
              </p>
              <h3 className="text-lg font-semibold text-green-800">
                Local Farmer Success
              </h3>
              <p className="text-gray-600 text-sm">
                Inspiring journeys of successful farmers.
              </p>
              <button className="text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1598515213692-5f252f75d785"
              alt="Agro Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-green-600 font-medium">
                Agro Tips
              </p>
              <h3 className="text-lg font-semibold text-green-800">
                Smart Farming Tips
              </h3>
              <p className="text-gray-600 text-sm">
                Easy tips for better productivity.
              </p>
              <button className="text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AgroNewsBlogs
