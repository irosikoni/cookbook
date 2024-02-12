type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export default async function Categories() {
  const response = await fetch("https://dummyjson.com/products");
  const data = (await response.json()) as { products: Product[] };
  const { products } = data;
  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
}
