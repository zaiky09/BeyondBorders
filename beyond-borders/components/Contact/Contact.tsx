import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-black mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          For inquiries or assistance, reach us on:
        </p>

        {/* Contact Information Card */}
        <div className="bg-white rounded-xl p-8 shadow-[0px_4px_15px_rgba(64,224,208,0.6)]">
          <h3 className="text-2xl font-semibold text-black mb-6">Get in Touch</h3>
          <p className="text-gray-700 mb-8">
            We would love to hear from you! Contact us via any of the channels
            below:
          </p>

          <ul className="space-y-5 text-lg">
            {/* Phone */}
            <li className="flex items-center justify-center space-x-3">
              <i className="bx bx-phone text-black text-2xl"></i>
              <a
                href="tel:+254727407775"
                className="text-black hover:text-teal-500 transition duration-300"
              >
                +254 727 407 775
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center justify-center space-x-3">
              <i className="bx bx-envelope text-black text-2xl"></i>
              <a
                href="mailto:beyond_brdr@yahoo.com"
                className="text-black hover:text-teal-500 transition duration-300"
              >
                beyond_brdr@yahoo.com
              </a>
            </li>
          </ul>

          {/* WhatsApp Chat Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/254727407775?text=Hello!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={24} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
