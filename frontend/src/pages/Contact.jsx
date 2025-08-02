export default function Contact() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto bg-gray-100 p-4 rounded shadow">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 mb-2 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}
