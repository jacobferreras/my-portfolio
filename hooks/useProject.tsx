import { useState, useEffect, use } from "react";
import { fetchProjects } from "@/services/fetchProjects";

const useProject = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await fetchProjects();
        setProject(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    getProjects();
  }, []);

  return { project };
};

export default useProject;
