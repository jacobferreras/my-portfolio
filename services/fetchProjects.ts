import axios from "axios";

export const fetchProjects = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
