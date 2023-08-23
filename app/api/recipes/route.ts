import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes);
}

export async function POST(req: NextRequest) {
  const json = await req.json();
  const recipe = await prisma.recipe.create({
    data: json,
  });
  return NextResponse.json(recipe);
}
