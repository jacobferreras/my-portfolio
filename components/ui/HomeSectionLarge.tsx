import React from "react";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const HomeSectionLarge = () => {
  return (
    <div>
      {/* Home */}
      <motion.section
        id="home"
        className="flex flex-col lg:flex-row justify-center items-center z-10 min-h-screen relative gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col px-4 xl:mr-4 md:mt-8">
          <motion.h2
            className="text-[#a3a3a3] text-xl font-serif font-bold text-center mb-4 lg:text-start"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Jacob Ferreras
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#fafafa] font-bold text-center mb-4 lg:text-start"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Full Stack Developer
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl  font-inter font-extralight text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Building scalable web applications with clean architecture and
            modern technologies.
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4 lg:justify-start">
            <motion.button
              className="btn rounded-lg bg-[#454545] w-full md:w-auto font-sans font-bold text-white hover:bg-[#333333] transition-colors duration-300"
              onClick={() => {
                const projectSection = document.getElementById("contact");
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
            </motion.button>

            <Link
              href="/Rhobel Jacob Ferreras.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button className="btn-ghost rounded-lg  w-full md:w-auto">
                Download Resume
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col  ">
          <div className="">
            <motion.img
              src="/Jacob.png"
              alt="My Picture"
              className="max-w-auto h-98 md:h-auto md:w-full rounded-lg border-accent-content mb-4"
            />
          </div>
          <div className="flex flex-row gap-x-4 justify-center items-center ">
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
                <i className="bi bi-linkedin text-3xl hover:text-[#454545]"></i>
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
                <i className="bi bi-github text-3xl hover:text-[#454545]"></i>
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
                <i className="bi bi-instagram text-3xl hover:text-[#454545]"></i>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeSectionLarge;
