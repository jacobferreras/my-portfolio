import React from "react";
import { motion } from "motion/react";

const HomeSectionSmall = () => {
  return (
    <>
      <section id="home" className="flex min-h-screen z-10 relative">
        <div className="flex flex-col justify-center items-center relative">
          <motion.h1
            className="text-2xl sm:3xl md:text-4xl text-base-content font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi! I'm
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl text-blue-600 font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Rhobel Jacob Ferreras
          </motion.h1>
          <div className="flex flex-row gap-2 md:gap-4">
            <motion.h2
              className="text-xl sm:text-3xl md:text-4xl text-base-content font-bold "
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className="text-blue-600 "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                👋
              </motion.span>
              I am a
            </motion.h2>
            <motion.h2
              className="text-xl sm:text-3xl md:text-4xl text-base-content font-bold mb-4 underline decoration-blue-600 decoration-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Full Stack Developer
            </motion.h2>
          </div>
          <motion.img
            src="/my_picture.png"
            alt="My Picture"
            className="max-w-72 h-72 md:h-auto md:max-w-96 rounded-full shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="flex flex-row gap-x-4 justify-center">
            <motion.a
              href="https://www.linkedin.com/in/jacob-ferreras-516a81273/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <i className="bi bi-linkedin text-3xl"></i>
            </motion.a>
            <motion.a
              href="https://github.com/jacobferreras"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <i className="bi bi-github text-3xl"></i>
            </motion.a>
            <motion.a
              href="https://github.com/jacobferreras"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <i className="bi bi-instagram text-3xl"></i>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSectionSmall;
