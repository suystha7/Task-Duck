'use client';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="h-auto p-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-300">
          <h1 className="text-3xl font-bold mb-6 text-[#EB1700]">Contact Support</h1>

          {submitted ? (
            <div className="text-green-600 text-center font-semibold">
              ✅ Your message has been sent. We&apos;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Your Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">How can we help?</label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right: FAQs */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Support Topics</h2>
          <ul className="list-disc space-y-3 pl-5 text-gray-700 text-base">
            <li>🧾 <strong>Billing & Payment:</strong> Update your card, check your invoice.</li>
            <li>📩 <strong>Email Delivery:</strong> Troubleshooting delivery or spam issues.</li>
            <li>🔒 <strong>Security:</strong> Account protection and 2FA setup.</li>
            <li>🧪 <strong>Feature Requests:</strong> Suggest new features or improvements.</li>
            <li>💡 <strong>Getting Started:</strong> Learn how to set up your first campaign.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
