import React from "react";
import useProject from "@/hooks/useProject";
import Link from "next/link";
import { motion } from "motion/react";

type Project = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  technology1: string;
  technology2: string;
  technology3: string;
  technology4: string;
  liveDemoUrl: string;
  githubUrl: string;
};

const ProjectCard = () => {
  const { project } = useProject() as { project: Project[] };

  if (project.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 justify-center"
    >
      {project.map((projects, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="card bg-base-200 w-auto xl:w-100 mb-4 shadow-md shadow-blue-500/50 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          key={projects.id ?? index}
        >
          <figure>
            <img src={projects.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projects.title}</h2>
            <p>{projects.description}</p>
            <div className="card-actions justify-start">
              <div className="badge badge-neutral">{projects.technology1}</div>
              <div className="badge badge-neutral">{projects.technology2}</div>
              <div className="badge badge-neutral">{projects.technology3}</div>
              <div className="badge badge-neutral">{projects.technology4}</div>
            </div>

            <div className="flex flex-row gap-2 card-actions justify-start ">
              {projects.githubUrl && (
                <Link
                  href={projects.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn bg-base-300 rounded-xl hover:bg-base-100">
                    <i className="bi bi-github"></i>GitHub
                  </button>
                </Link>
              )}
              {projects.liveDemoUrl && (
                <Link
                  href={projects.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn bg-base-300 rounded-xl hover:bg-base-100">
                    <i className="bi bi-globe"></i>Live Demo
                  </button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;
