import { PrismaClient } from "../../../lib/generated/prisma";
const prisma = new PrismaClient();

const allowedOrigins = [
  "https://www.rhobeljacobferreras.tech",
  "https://rhobeljacobferreras.tech",
  "http://localhost:3000",
];

export async function GET(request: Request) {
  const origin = request.headers.get("origin") || "";
  const corsOrigin = allowedOrigins.includes(origin || "")
    ? origin
    : allowedOrigins[0];

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
        "Access-Control-Allow-Origin": corsOrigin,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": corsOrigin,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
    });
  }
}
