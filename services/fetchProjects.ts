import axios from "axios";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(
      "https://my-portfolio-five-roan-50.vercel.app/api/projects"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
