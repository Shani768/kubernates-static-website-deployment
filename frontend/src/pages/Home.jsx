export default function Home() {
  return (
    <div className="p-6 text-center">
      {/* Hero Section */}
      <section className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Our Website</h2>
        <p className="text-lg max-w-xl mx-auto mb-4">
          We create modern and beautiful web applications using React and Vite.
          Explore our pages to know more about us and get in touch!
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast Performance</h3>
          <p className="text-gray-700">
            Built with Vite for lightning-fast development and optimized builds.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🎨 Beautiful UI</h3>
          <p className="text-gray-700">
            Clean and modern interface styled with Tailwind CSS.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🔗 Easy Routing</h3>
          <p className="text-gray-700">
            Smooth navigation using React Router for a seamless experience.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 bg-blue-100 p-6 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">🚀 Start Your Journey Today!</h3>
        <p className="text-gray-700 mb-4">
          Explore our About and Contact pages to know more or get in touch.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
