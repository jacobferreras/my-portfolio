"use client";
import React from "react";
import { motion } from "motion/react";
import Particles from "@/components/ui/Particles/Particles";

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

        <section
          id="home"
          className="flex justify-center items-center z-10 min-h-screen relative"
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="text-7xl text-base-content font-bold mr-4 mb-4">
                Hi! I'm
              </h1>
              <h1 className="text-7xl text-blue-600 font-bold mb-4">
                Rhobel Jacob Ferreras
              </h1>
            </div>
            <h2 className="text-5xl text-base-content font-bold mb-4">
              <span className="text-blue-600">👋</span>I am a Full Stack
              Developer
            </h2>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="pl-4">
              <motion.img
                src="/my_picture.png"
                alt="My Picture"
                className="w-auto h-96"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
            <div className="flex flex-row gap-x-4 pl-40">
              <motion.a
                href="https://www.linkedin.com/in/jacob-ferreras-516a81273/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/linkedin_icon.png"
                  alt="LinkedIn"
                  className="w-12 h-12"
                />
              </motion.a>
              <motion.a
                href="https://github.com/jacobferreras"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/github.png" alt="GItHub" className="w-12 h-12" />
              </motion.a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex justify-center items-center z-10 min-h-screen relative"
        >
          <h1 className="text-3xl text-base-content">About Me</h1>
        </section>

        <section
          id="project"
          className="flex justify-center items-center z-10 min-h-screen relative"
        >
          <h1 className="text-3xl text-white">Project Page</h1>
        </section>

        <section
          id="skills"
          className="flex justify-center items-center z-10 min-h-screen relative"
        >
          <h1 className="text-3xl text-white">Skills Page</h1>
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
