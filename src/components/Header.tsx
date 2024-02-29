import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between item-center p-4">
      <Link href="/">
        <h1 className="text-4xl font-extrabold">{"Stacking Cheeze"}</h1>
      </Link>
      <nav className="flex gap-4 items-center font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
