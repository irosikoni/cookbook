import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    images: string[]
}


function CategoryButton({ item }: { item: { images: (string | undefined)[]; title: string | null | undefined; }; }) {

    return (
        <div>
            <img
                src={item.images[0]}
                width="300px"
            />
            <h5>{item.title}</h5>
        </div>
    )

}

export default async function Categories() {

    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json() as { products: Product[] }
    const { products } = data
    console.log(data)
    return (
        <div>
            <div>Categories</div>
            <ul>{products.map(product => <li key={product.id}>
                <CategoryButton

                    item={{
                        title: product.title,
                        images: product.images,
                    }}
                />
            </li>
            )}
            </ul>
        </div>
    )
}