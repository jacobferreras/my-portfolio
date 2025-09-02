import { useState, useEffect } from "react";
import { fetchProjects } from "@/services/fetchProjects";

const useProject = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await fetchProjects();
        setProject(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { project, loading };
};

export default useProject;
