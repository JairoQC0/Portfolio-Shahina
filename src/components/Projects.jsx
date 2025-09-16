import { motion } from "framer-motion";
import { Rocket } from "lucide-react"; // Ícono elegante para proyectos espaciales

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-blue-900/10 via-black/50 to-black py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título con ícono */}
        <motion.h2
          className="flex items-center justify-center gap-2 text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Rocket className="w-7 h-7 text-blue-400" />
          Projects
        </motion.h2>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card de proyecto */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-gray-600/50 hover:border-blue-500/50 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-400 transition-colors">
              Project Title
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A brief description of Shahina's project. This section can be
              expanded as more projects are added.
            </p>
          </motion.div>

          {/* Ejemplo de otra card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-gray-600/50 hover:border-purple-500/50 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-purple-400 transition-colors">
              Future Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Placeholder for upcoming space-related projects and innovations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
