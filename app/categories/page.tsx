type Product = {
    id: number;
    title: string;
    description: string;
    images: string[]
}


export default async function Categories() {

    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json() as { products: Product[] }
    const { products } = data
    return (
        <div>
            <div>Categories</div>
            <ul>{products.map(product => <li key={product.id}>{product.title}</li>)}</ul>
        </div>
    )
}