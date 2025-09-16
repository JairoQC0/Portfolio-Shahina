import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 text-center">
      {/* Título */}
      <motion.h2
        className="flex items-center justify-center gap-2 text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Mail className="w-7 h-7 text-blue-400" />
        Contact
      </motion.h2>

      {/* Texto */}
      <motion.p
        className="text-gray-300 mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Interested in connecting? Reach out to Shahina and let’s talk about
        space, innovation, or collaboration!
      </motion.p>

      {/* Botón de email */}
      <motion.a
        href="mailto:Moonshahina@icloud.com"
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2 text-lg font-medium"
        whileHover={{ scale: 1.08 }}
      >
        <Mail className="w-5 h-5" />
        Send Email
      </motion.a>
    </section>
  );
}
