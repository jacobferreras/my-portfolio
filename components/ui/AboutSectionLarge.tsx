import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

const AboutSectionLarge = () => {
  return (
    <div>
      <motion.section
        id="about"
        className="flex flex-col lg:gap-4 px-4 py-18 lg:justify-center min-h-screen lg:items-center z-10 relative lg:flex-row xl:gap-34 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col">
          <motion.h1
            className="text-4xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-4"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg text-base-content mt-4 max-w-2xl xl:max-w-4xl text-justify font-normal"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am a Full Stack Developer with a passion for creating dynamic and
            user-friendly web applications. My expertise spans both front-end
            and back-end technologies, allowing me to build seamless and
            efficient solutions from concept to deployment. I enjoy learning new
            tools and frameworks, and I am always eager to take on new
            challenges that help me grow as a developer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-4 mt-4"
          >
            <motion.div>
              <Card
                icon="bi bi-mortarboard"
                title="Education"
                description="Bachelor of Science in Computer Science"
                firstInfo="STI San Jose Del Monte Bulacan"
                secondInfo="2021 - 2025"
              />
            </motion.div>
            <motion.div>
              <Card
                icon="bi bi-briefcase"
                title="Experience"
                description="Full Stack Developer Intern"
                firstInfo="Philippine Coast Guard WCEISC"
                secondInfo="March 2025 - May 2025"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center items-center lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/Second_picture.png"
              alt="my second picture"
              className="w-full h-76 md:w-auto lg:h-60"
            />
          </motion.div>

          <div className="flex flex-row gap-4 my-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="badge badge-outline"
            >
              Developer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="badge badge-outline"
            >
              Gamer
            </motion.div>
          </div>

          <Link
            href="/Rhobel Jacob Ferreras.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-blue-600 text-base-content"
              >
                Download Resume
                <i className="bi bi-box-arrow-down text-xl hover:text-blue-500"></i>
              </motion.button>
            </motion.div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSectionLarge;
