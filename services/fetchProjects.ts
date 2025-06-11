import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchProjects = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/projects`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
