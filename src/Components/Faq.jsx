const Faq = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-800">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about KrishiLink and how the platform works.
          </p>
        </div>

        {/* ===== FAQ Items ===== */}
        <div className="space-y-4">

          {/* Item 1 */}
          <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-green-800">
              How can I sell my crops on KrishiLink?
              <span className="text-green-600 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Simply create an account, add your crop details, set your price,
              and buyers can contact you directly through the platform.
            </p>
          </details>

          {/* Item 2 */}
          <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-green-800">
              Is KrishiLink free to use?
              <span className="text-green-600 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Yes, creating an account and posting crops is completely free.
              There are no hidden charges.
            </p>
          </details>

          {/* Item 3 */}
          <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-green-800">
              How do buyers contact sellers?
              <span className="text-green-600 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Buyers can send interest requests directly through the platform,
              and sellers receive notifications instantly.
            </p>
          </details>

          {/* Item 4 */}
          <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-green-800">
              Is my personal information secure?
              <span className="text-green-600 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Yes, we use secure authentication and data protection methods
              to keep your information safe.
            </p>
          </details>

        </div>

      </div>
    </section>
  )
}

export default Faq
