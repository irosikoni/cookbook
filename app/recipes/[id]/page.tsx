type Recipe = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export default async function Recipe({ params }: { params: { id: string } }) {
  const recipie = await getRecipe(params.id);
  return (
    <div>
      <div className="grid grid-cols-3 mx-16">
        <div className="col-start-2 col-span-1">
          <h1 className=" text-3xl text-center mt-5 mb-16 py-5">
            {recipie.title}
          </h1>
        </div>

        <div className="col-start-1 col-end-2 my-5">
          <img src={recipie.images[0]} />
        </div>
        <div className="col-start-3 col-end-4 my-5">{recipie.description}</div>

        <div className="col-start-1 col-end-2 my-10">
          <ul className="text-xl">Składniki:</ul>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
        </div>
        <div className="col-start-3 col-end-4 my-10">
          <ul className="text-xl">Przygotowanie:</ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            recusandae sapiente similique ipsum a et dignissimos magni
            veritatis, quam necessitatibus accusamus officia unde voluptatum
            voluptate officiis fugit quos, obcaecati velit?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. uam
            necessitatibus accusamus officia unde voluptatum voluptate officiis
            fugit quos, obcaecati velit?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            recusandae sapiente similique ipsum a et dignissimos magni
            veritatis, quam necessitatibus accusamus officia unde voluptatum
            voluptate officiis fugit quos, obcaecati velit?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nulla expedita consequatur facilis rem delectus veniam doloribus
            optio dolores aspernatur repellendus mollitia necessitatibus
            tempore, eos sed neque quis voluptas nostrum.
          </li>
        </div>
        <div className="col-start-1 col-end-2 my-10">
          <ul className="text-xl">Uwagi:</ul>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
          <li>jshdgfjkahsgdfjhsdj</li>
        </div>
      </div>
    </div>
  );
}

async function getRecipe(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = (await response.json()) as Recipe;
  return data;
}
