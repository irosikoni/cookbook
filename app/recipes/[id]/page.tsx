type Recipe = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export default async function Recipe({ params }: { params: { id: string } }) {
  const recipie = await getRecipe(params.id);
  return <div>Hello {recipie.title}</div>;
}

async function getRecipe(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = (await response.json()) as Recipe;
  return data;
}
