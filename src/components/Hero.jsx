import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center p-6 overflow-hidden"
    >
      {/* Contenido principal */}
      <motion.h1
        className="relative z-20 text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Shahina Rustamova
      </motion.h1>

      <motion.p
        className="relative z-20 mt-4 text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Aspiring Aerospace Engineer & Future Astronaut
      </motion.p>
    </section>
  );
}
