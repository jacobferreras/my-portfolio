import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../common/ProjectCard";

const ProjectSectionLarge = () => {
  return (
    <div>
      {/* Projects */}
      <section
        id="project"
        className="flex justify-center min-h-screen items-center z-10 relative gap-12 px-8 mt-12 lg:mt-0"
      >
        <div className="flex flex-col">
          <motion.h1
            className="text-xl text-base-content font-serif font-light mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h1>

          <motion.h1
            className="text-4xl text-base-content font-serif font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What I’ve Built
          </motion.h1>

          <motion.h2
            className="text-md md:text-lg lg:text-xl text-base-content font-serif font-light mb-8 text-center lg:max-w-4xl mx-auto "
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            These projects represent my journey as a Full Stack Developer.
            Explore, get inspired, and see what I can bring to the table!
          </motion.h2>

          <div>
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSectionLarge;
