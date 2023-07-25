import Link from "next/link";

type BlackButtonProps = {
  item: { link: string; text: string | null };
};

export function BlackButton({ item }: BlackButtonProps) {
  return (
    <div className="m-4">
      <Link href={item.link}>
        <button className="bg-black text-white text-sm px-2 py-2 rounded-md w-24">
          {item.text}
        </button>
      </Link>
    </div>
  );
}
