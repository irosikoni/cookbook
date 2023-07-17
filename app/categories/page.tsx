import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    images: string[]
}


function CategoryButton({ item }: { item: { images: (string | undefined)[]; title: string | null | undefined; }; }) {

    return (

        <div className="w-72 h-72 bg-cupcake-light-grey flex flex-col justify-items-center content-around items-center justify-center w-60">
            <div className="m-5 h-48 w-48 overflow-hidden">

                <img
                    src={item.images[0]}
                />
            </div>
            <div>

                <h5>{item.title}</h5>
            </div>
            <div></div>
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
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {products.map(product => <div key={product.id}>
                    <CategoryButton
                        item={{
                            title: product.title,
                            images: product.images,
                        }}
                    />
                </div>
                )}
            </div>
        </div>
    )
}