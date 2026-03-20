import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import "bootstrap-icons/font/bootstrap-icons.css";

const AboutSectionLarge = () => {
  return (
    <div>
      <motion.section
        id="about"
        className="flex flex-col justify-center min-h-screen items-center z-10 relative gap-12 px-8 mt-8 lg:mt-0 lg:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col">
          <motion.h1
            className="text-lg font-medium text-base-content tracking-widest uppercase mb-4 text-center lg:text-start"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>

          <motion.h1
            className="text-xl md:text-3xl font-bold text-base-content tracking-widest uppercase mb-4 font-serif italic text-center lg:text-start"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Driven by Passion. Built with Precision.
          </motion.h1>

          <motion.p
            className="text-lg mt-4  font-serif  leading-relaxed text-gray-300 text-center lg:text-start lg:max-w-4xl"
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

          <motion.p
            className="text-lg mt-4 font-serif leading-relaxed text-gray-300 text-center lg:text-start lg:max-w-4xl"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Outside of coding, I’m passionate about gaming and basketball.
            Gaming keeps me engaged with strategy, teamwork, and
            problem-solving, while basketball helps me stay active and
            disciplined. Both hobbies have taught me valuable skills like focus,
            adaptability, and collaboration—qualities that I also bring into my
            work as a developer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Card
              icon="bi bi-code-slash"
              title="Experience"
              description="2+ Years"
              firstInfo=" Full Stack Development"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Card
              icon="bi bi-geo-alt"
              title="Location"
              description="Philippines"
              firstInfo="Makati City"
              secondInfo=""
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Card
              icon="bi bi-mortarboard"
              title="Education"
              description="BS Computer Science"
              firstInfo="STI College of San Jose Del Monte"
              secondInfo=""
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Card
              icon="bi bi-lightning"
              title="Philosophy"
              description="Clean Code"
              firstInfo="Scalable Architecture"
              secondInfo=""
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSectionLarge;
