import Link from "next/link";
import { FiltrationForm } from "../components/FiltrationForm";

type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

function CategoryButton({
  item,
}: {
  item: {
    id: number;
    images: (string | undefined)[];
    title: string | null | undefined;
  };
}) {
  return (
    <div className="h-72 bg-cupcake-light-grey flex flex-col justify-items-center content-around items-center justify-center w-60">
      <div className="m-5 h-48 w-48 overflow-hidden">
        <img src={item.images[0]} />
      </div>
      <div>
        <h5>{item.title}</h5>
      </div>
    </div>
  );
}

export default async function Categories() {
  const response = await fetch("https://dummyjson.com/products");
  const data = (await response.json()) as { products: Product[] };
  const { products } = data;
  return (
    <div>
      <div>Categories</div>
      <div>Search</div>
      <FiltrationForm />
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/recipes/${product.id}`}>
              <CategoryButton
                item={{
                  id: product.id,
                  title: product.title,
                  images: product.images,
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
