import React from "react";
import { motion } from "motion/react";

const HomeSectionLarge = () => {
  return (
    <div>
      {/* Home */}
      <section
        id="home"
        className="flex justify-center items-center z-10 min-h-screen relative "
      >
        <div className=" hidden lg:flex lg:flex-col">
          <div className=" lg:flex lg:flex-row">
            <motion.h1
              className="text-lg lg:text-6xl text-base-content font-bold lg:mr-4 lg:mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi! I'm
            </motion.h1>
            <motion.h1
              className="text-lg lg:text-6xl text-blue-600 font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Rhobel Jacob Ferreras
            </motion.h1>
          </div>

          <div className="flex flex-row gap-4">
            <motion.h2
              className="text-md lg:text-5xl text-base-content font-bold lg:mb-4 "
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
              className="text-md lg:text-5xl text-base-content font-bold mb-4 underline decoration-blue-600 decoration-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Full Stack Developer
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 ">
          <div className="pl-4">
            <motion.img
              src="/my_picture.png"
              alt="My Picture"
              className="w-auto h-auto lg:h-86"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            />
          </div>
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
    </div>
  );
};

export default HomeSectionLarge;
