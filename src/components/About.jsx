import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // icono elegante (instala lucide-react si no lo tienes)

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-4xl mx-auto px-6 py-24 text-center"
    >
      {/* Fondo sutil con gradiente radial */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black -z-10 rounded-3xl blur-2xl"></div>

      {/* Título con icono */}
      <motion.h2
        className="flex items-center justify-center gap-2 text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Sparkles className="w-7 h-7 text-purple-400" />
        About Me
      </motion.h2>

      {/* Texto en tarjeta */}
      <motion.div
        className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-gray-300 leading-relaxed text-lg">
          My name is{" "}
          <span className="text-blue-400 font-semibold">Shahina Rustamova</span>
          . I am a student at Santa Monica College studying astronomy, math, and
          engineering. I have a strong passion for space exploration and plan to
          become an aerospace engineer and astronaut.
        </p>
        <p className="mt-4 text-gray-400 leading-relaxed">
          I am preparing by taking STEM courses, applying to NASA programs, and
          gaining hands-on experience. I am also designing an innovation that
          could help shape the future of space science.
        </p>
      </motion.div>
    </section>
  );
}
