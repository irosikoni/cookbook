import Link from "next/link";


export function BlackButton({ item }: { item: { link: string, text: string | null } }) {
    return (
        <div className="m-4">
            <Link href={item.link}>
                <button className="bg-black text-white text-sm px-2 py-2 rounded-md w-24">{item.text}</button>
            </Link>
        </div>
    );
}