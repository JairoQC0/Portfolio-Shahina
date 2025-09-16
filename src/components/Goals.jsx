import { motion } from "framer-motion";
import { Telescope } from "lucide-react"; // Ícono espacial elegante

export default function Goals() {
  return (
    <section
      id="goals"
      className="relative max-w-4xl mx-auto px-6 py-24 text-center"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black -z-10 rounded-3xl blur-2xl"></div>

      {/* Título */}
      <motion.h2
        className="flex items-center justify-center gap-2 text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Telescope className="w-7 h-7 text-blue-400" />
        Goals & Vision
      </motion.h2>

      {/* Card con visión */}
      <motion.div
        className="bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:border-purple-500/50 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ y: -6 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I aim to contribute to humanity’s next steps in{" "}
          <span className="text-purple-400 font-semibold">
            space exploration
          </span>{" "}
          through <span className="text-blue-400">engineering</span>,{" "}
          <span className="text-blue-400">research</span>, and{" "}
          <span className="text-blue-400">innovation</span>.
        </p>
      </motion.div>
    </section>
  );
}
