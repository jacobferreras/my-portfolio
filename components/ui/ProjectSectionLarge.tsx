import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../common/ProjectCard";

const ProjectSectionLarge = () => {
  return (
    <div>
      {/* Projects */}
      <section
        id="project"
        className="flex justify-center px-4 py-14 min-h-screen items-center z-10 relative gap-12"
      >
        <div className="flex flex-col items-start">
          <motion.h1
            className="text-4xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h1>
          <div>
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSectionLarge;
