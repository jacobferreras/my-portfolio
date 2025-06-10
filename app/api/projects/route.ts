import { PrismaClient } from "../../../lib/generated/prisma";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://my-portfolio-five-roan-50.vercel.app/",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://my-portfolio-five-roan-50.vercel.app/",
      },
    });
  }
}
