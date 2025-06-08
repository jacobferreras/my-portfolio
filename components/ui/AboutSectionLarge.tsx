import React from "react";
import { motion } from "motion/react";
import Card from "@/components/common/Card";
import Link from "next/link";

const AboutSectionLarge = () => {
  return (
    <div>
      <section
        id="about"
        className="flex justify-center min-h-200 items-center z-10 relative gap-28 "
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
            I am a Full Stack Developer with a passion for creating dynamic and
            user-friendly web applications. My expertise spans both front-end
            and back-end technologies, allowing me to build seamless and
            efficient solutions from concept to deployment. I enjoy learning new
            tools and frameworks, and I am always eager to take on new
            challenges that help me grow as a developer.
          </motion.p>
          <div className="flex flex-row gap-4 mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                icon="bi bi-mortarboard"
                title="Education"
                description="Bachelor of Science in Computer Science"
                firstInfo="STI San Jose Del Monte Bulacan"
                secondInfo="2021 - 2025"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

          <Link href="/My_Resume.pdf" target="_blank">
            <button className="btn bg-blue-600 text-base-content">
              Download Resume<i className="bi bi-box-arrow-down text-xl"></i>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutSectionLarge;
