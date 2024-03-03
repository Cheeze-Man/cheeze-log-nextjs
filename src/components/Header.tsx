import Link from "next/link";

const LINK_CLASS =
  "transition-all hover:text-amber-500 hover:border-b-2 hover:border-b-amber-500";

export default function Header() {
  return (
    <header className="flex justify-between item-center p-4">
      <Link href="/">
        <h1 className="italic text-4xl font-extrabold transition-all hover:text-amber-500">
          {"Stacking Cheeze 🧀"}
        </h1>
      </Link>
      <nav className="flex gap-4 items-center font-semibold">
        <Link className={LINK_CLASS} href="/">
          Home
        </Link>
        <Link className={LINK_CLASS} href="/about">
          About
        </Link>
        <Link className={LINK_CLASS} href="/posts">
          Posts
        </Link>
        <Link className={LINK_CLASS} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
