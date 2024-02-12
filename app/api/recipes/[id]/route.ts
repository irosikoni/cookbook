import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!recipe) {
    return NextResponse.redirect("/404");
  }

  return NextResponse.json(recipe);
}
