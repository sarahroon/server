import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-6 p-4">
      <Link href="/" className="hover:opacity-60 transition-opacity">
        Home
      </Link>
      <Link href="/books" className="hover:opacity-60 transition-opacity">
        Books
      </Link>
      <Link href="/users/you" className="hover:opacity-60 transition-opacity">
        Your Profile
      </Link>
    </nav>
  );
}
