export default function About() {
  return (
    <div className="p-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        We are passionate about creating modern, fast, and user-friendly web
        applications using React and Vite. Our goal is to make web development
        simple yet powerful for everyone.
      </p>

      {/* Mission Section */}
      <section className="bg-blue-100 p-6 rounded-lg max-w-3xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-2">🌟 Our Mission</h3>
        <p className="text-gray-700">
          To deliver high-quality websites and applications that are easy to use,
          beautifully designed, and optimized for performance.
        </p>
      </section>

      {/* Team Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-1">👨‍💻 John Doe</h4>
          <p className="text-gray-700">Frontend Developer</p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-1">👩‍💻 Jane Smith</h4>
          <p className="text-gray-700">UI/UX Designer</p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-1">🛠️ Alex Brown</h4>
          <p className="text-gray-700">Backend Engineer</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">💡 Our Values</h3>
        <ul className="list-disc text-left max-w-md mx-auto pl-5 text-gray-700">
          <li className="mb-2">Commitment to quality and performance</li>
          <li className="mb-2">User-focused design and experience</li>
          <li className="mb-2">Continuous learning and innovation</li>
        </ul>
      </section>
    </div>
  );
}
