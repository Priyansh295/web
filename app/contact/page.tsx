"use client";

import { Send } from "lucide-react";

export default function Contact() {
  return (
    <article className="page-transition">
       <header className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit after:content-[''] after:absolute after:h-[3px] after:w-[30px] dark:after:bg-[#ffdb70] after:bg-blue-600 after:bottom-[-10px] after:left-0 after:rounded-md">Contact</h2>
      </header>

      <section className="mb-10">
        {/* Map Placeholder */}
        <div className="w-full h-[300px] dark:bg-[#2b2b2c] bg-gray-200 rounded-2xl overflow-hidden dark:border border border-white/5 border-gray-200 dark:grayscale grayscale-0">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124424.7176465451!2d77.580643!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">Contact Form</h3>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for the message!"); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <input type="text" placeholder="Full Name" className="w-full bg-transparent border dark:border-white/10 border-gray-300 rounded-xl px-5 py-4 dark:text-white text-gray-800 placeholder-gray-400 dark:placeholder-white/40 focus:border-blue-600 dark:focus:border-[#ffdb70] focus:outline-none transition-colors" required />
                </div>
                <div className="relative">
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border dark:border-white/10 border-gray-300 rounded-xl px-5 py-4 dark:text-white text-gray-800 placeholder-gray-400 dark:placeholder-white/40 focus:border-blue-600 dark:focus:border-[#ffdb70] focus:outline-none transition-colors" required />
                </div>
            </div>
            <div className="relative">
                <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border dark:border-white/10 border-gray-300 rounded-xl px-5 py-4 dark:text-white text-gray-800 placeholder-gray-400 dark:placeholder-white/40 focus:border-blue-600 dark:focus:border-[#ffdb70] focus:outline-none transition-colors resize-none" required></textarea>
            </div>
            <button type="submit" className="flex items-center gap-3 dark:bg-[#2b2b2c] bg-white border dark:border-[#ffdb70]/50 border-blue-600 dark:text-[#ffdb70] text-blue-600 px-6 py-4 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-[#ffdb70] hover:text-white dark:hover:text-[#2b2b2c] transition-all cursor-pointer shadow-lg">
                <Send size={18} />
                <span>Send Message</span>
            </button>
        </form>
      </section>
    </article>
  )
}
