"use client";
import React from "react";
import { motion } from "motion/react";
import Particles from "@/components/ui/Particles/Particles";
import Card from "@/components/common/Card";
import ProjectCard from "@/components/common/ProjectCard";

const page = () => {
  return (
    <>
      <div className="bg-base-100 min-h-screen relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* Home */}
        <section
          id="home"
          className="flex justify-center items-center z-10 min-h-screen relative "
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <motion.h1
                className="text-6xl text-base-content font-bold mr-4 mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Hi! I'm
              </motion.h1>
              <motion.h1
                className="text-6xl text-blue-600 font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Rhobel Jacob Ferreras
              </motion.h1>
            </div>

            <div className="flex flex-row gap-4">
              <motion.h2
                className="text-5xl text-base-content font-bold mb-4 "
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
                className="text-5xl text-base-content font-bold mb-4 underline decoration-blue-600 decoration-4"
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
                className="w-auto h-86"
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

        {/* About */}
        <section
          id="about"
          className="flex justify-center items-center pt-32 z-10 relative gap-28 mb-44"
        >
          <div className="flex flex-col items-start">
            <motion.h1
              className="text-5xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h1>

            <motion.p
              className="text-lg text-base-content mt-4 max-w-2xl text-justify font-semibold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              I am a Full Stack Developer with a passion for creating dynamic
              and user-friendly web applications. My expertise spans both
              front-end and back-end technologies, allowing me to build seamless
              and efficient solutions from concept to deployment. I enjoy
              learning new tools and frameworks, and I am always eager to take
              on new challenges that help me grow as a developer.
            </motion.p>
            <div className="flex flex-row gap-4 mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  icon="bi bi-mortarboard"
                  title="Education"
                  description="Bachelor of Science in Computer Science"
                  firstInfo="STI San Jose Del Monte Bulacan"
                  secondInfo="2021 - 2025"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  icon="bi bi-briefcase"
                  title="Experience"
                  description="Full Stack Developer Intern"
                  firstInfo="Philippine Coast Guard WCEISC"
                  secondInfo="March 2025 - May 2025"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-6">
            <img
              src="/Second_picture.png"
              alt="my second picture"
              className="w-full h-76 pt-8"
            />
            <div className="flex flex-row gap-4 my-4">
              <div className="badge badge-outline">Developer</div>
              <div className="badge badge-outline">Gamer</div>
            </div>

            <button className="btn bg-blue-600 text-base-content">
              Download Resume<i className="bi bi-box-arrow-down text-xl"></i>
            </button>
          </div>
        </section>

        {/* Projects */}
        <section
          id="project"
          className="flex justify-center items-center  pt-32 z-10 relative gap-12"
        >
          <div className="flex flex-col items-start">
            <motion.h1
              className="text-5xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Projects
            </motion.h1>
            <div className="flex flex-row gap-4">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="flex justify-center items-center pt-32 z-10 relative gap-12"
        >
          <motion.h1
            className="text-5xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Skills
          </motion.h1>
        </section>

        <section
          id="contact"
          className="flex justify-center items-center z-10 min-h-screen relative"
        >
          <h1 className="text-3xl text-white">Contact Page</h1>
        </section>
      </div>
    </>
  );
};

export default page;
