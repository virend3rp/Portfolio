"use client";
import SparkleCursor from "@/components/SparkleCursor";
import Link from "next/link";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    alert("Message sent!");
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-5">
      <SparkleCursor/>
      <div className="container max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch with Virender</h2>
        <p className="text-center text-lg text-gray-600 mb-6">
          I'd love to hear from you.Reach out to me on any of my socials and i will get back to you as soon as possible!
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="https://www.instagram.com/virender_parasariya/" passHref>
            <i className="fab fa-instagram text-2xl cursor-pointer hover:text-pink-500 transition duration-200 hover:scale-150"></i>
          </Link>
          <Link href="https://x.com/parasariyav" passHref>
            <i className="fab fa-x text-2xl cursor-pointer hover:scale-150 transition duration-200"></i>
          </Link>
          <Link href="https://www.linkedin.com/in/virender-parasariya-8320631b6/" passHref>
            <i className="fab fa-linkedin-in text-2xl cursor-pointer hover:text-blue-400 transition duration-200 hover:scale-150"></i>
          </Link>
        </div>

      </div>
       {/* Go Back Home Button */}
       <div className="mt-8 flex justify-center">
          <Link href="/">
            <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Take me Back Home
            </button>
          </Link>
        </div>
    </div>
  );
};

export default ContactPage;
