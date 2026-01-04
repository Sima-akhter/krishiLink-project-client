const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-800">
            Stay Connected
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Subscribe to receive the latest crop updates and farming insights.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Join Our Newsletter
          </h3>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;
