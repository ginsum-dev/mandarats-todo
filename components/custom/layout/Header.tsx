import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-end gap-6 py-4 px-6 text-sm text-gray-500">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/support">Support</Link>
    </header>
  );
}
