import React from "react";
import useProject from "@/hooks/useProject";
import Link from "next/link";

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
    <div className="flex flex-col justify-center lg:flex-row gap-4">
      {project.map((projects, index) => (
        <div
          className="card bg-base-200 w-auto lg:w-96 shadow-sm mb-4"
          key={projects.id ?? index}
        >
          <figure>
            <img src={projects.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projects.title}</h2>
            <p>{projects.description}</p>
            <div className="card-actions justify-starv">
              <div className="badge badge-neutral ">{projects.technology1}</div>
              <div className="badge badge-neutral">{projects.technology2}</div>
              <div className="badge badge-neutral">{projects.technology3}</div>
              <div className="badge badge-neutral">{projects.technology4}</div>
            </div>

            <div className="flex flex-row gap-2 card-actions justify-start">
              {projects.githubUrl && (
                <Link
                  href={projects.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn bg-base-300 rounded-xl">
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
                  <button className="btn bg-base-300 rounded-xl">
                    <i className="bi bi-globe"></i>Live Demo
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
