import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../common/ProjectCard";
import Card from "../common/Card";

const ProjectSectionSmall = () => {
  return (
    <div>
      <section
        id="project"
        className="flex min-h-screen z-10 relative px-4 mb-24"
      >
        <div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl text-base-content font-bold underline decoration-blue-600 decoration-4 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h1>
          <ProjectCard />
        </div>
      </section>
    </div>
  );
};

export default ProjectSectionSmall;
