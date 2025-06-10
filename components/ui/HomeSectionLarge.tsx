import React from "react";
import { motion } from "motion/react";

const HomeSectionLarge = () => {
  return (
    <div>
      {/* Home */}
      <motion.section
        id="home"
        className="flex flex-col lg:flex-row justify-center items-center z-10 min-h-screen relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col xl:mr-4">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:mb-4">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-base-content font-bold mr-2"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi! I'm
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-blue-600 font-bold"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Rhobel Jacob Ferreras
            </motion.h1>
          </div>

          <div className="flex flex-row gap-2 md:gap-4">
            <motion.h2
              className="text-xl sm:text-4xl xl:text-5xl text-base-content font-bold lg:mb-4 "
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className="text-blue-600 "
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                👋
              </motion.span>
              I am a
            </motion.h2>
            <motion.h2
              className="text-xl sm:text-4xl xl:text-5xl text-base-content font-bold mb-4 underline decoration-blue-600 decoration-4"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Full Stack Developer
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 ">
          <div className="">
            <motion.img
              src="/my_picture.png"
              alt="My Picture"
              className="max-w-72 h-72 md:h-auto md:max-w-86 rounded-full"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="flex flex-row gap-x-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/jacob-ferreras-516a81273/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-linkedin text-3xl hover:text-blue-500"></i>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.a
                href="https://github.com/jacobferreras"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-github text-3xl hover:text-blue-500"></i>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.a
                href="https://www.instagram.com/itsme_jacobzxc/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-instagram text-3xl hover:text-blue-500"></i>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeSectionLarge;
