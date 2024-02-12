import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes);
}
