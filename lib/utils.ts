import { PrismaClient } from "./generated/prisma";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const prisma = new PrismaClient();

export default prisma;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
