"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit">
          Contact
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute h-[3px] bg-[var(--accent)] bottom-[-10px] left-0 rounded-md"
          />
        </h2>
      </motion.header>

      <motion.section variants={itemVariants} className="mb-10">
        <motion.div
          whileHover={{ boxShadow: "0 0 30px rgba(255,107,53,0.15)" }}
          className="w-full h-[300px] bg-[var(--card-bg)] dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[var(--card-border)] dark:grayscale grayscale-0 transition-all duration-300"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124424.7176465451!2d77.580643!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">Contact Form</h3>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for the message!");
          }}
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="relative group">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-[var(--card-border)] rounded-xl px-5 py-4 dark:text-white text-gray-800 placeholder-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:shadow-[0_0_20px_rgba(255,107,53,0.2)] transition-all duration-300"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-[var(--card-border)] rounded-xl px-5 py-4 dark:text-white text-gray-800 placeholder-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:shadow-[0_0_20px_rgba(255,107,53,0.2)] transition-all duration-300"
                required
              />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative group">
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-transparent border border-[var(--card-border)] rounded-xl px-5 py-4 dark:text-white text-gray-800 placeholder-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:shadow-[0_0_20px_rgba(255,107,53,0.2)] transition-all duration-300 resize-none"
              required
            />
          </motion.div>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255,107,53,0.3)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center gap-3 bg-[var(--accent)] text-white px-6 py-4 rounded-xl font-bold transition-all cursor-pointer shadow-lg hover:bg-[var(--accent-light)]"
          >
            <Send size={18} />
            <span>Send Message</span>
          </motion.button>
        </form>
      </motion.section>
    </motion.article>
  );
}
