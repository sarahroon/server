import { db } from "@/utils/connect";
import { getUser } from "@/utils/getUser";
import Link from "next/link";

export default async function BooksPage() {
  // make sure user is logged in (getUser redirects if not)
  const user = await getUser();

  // get all the books form the database
  const books = (await db.query(`SELECT * FROM books`)).rows;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl">All Books</h1>
        <Link href="/books/new" className="hover:opacity-60 transition-opacity">
          + Add a new book
        </Link>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`} className="group">
              {book.img_url ? (
                <img
                  src={book.img_url}
                  alt={book.title}
                  className="w-full aspect-[2/3] object-cover rounded group-hover:opacity-80 transition-opacity"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-gray-200 rounded flex items-center justify-center text-gray-500 group-hover:opacity-80 transition-opacity">
                  No cover
                </div>
              )}
              <h2 className="mt-2 text-sm font-medium">{book.title}</h2>
              <p className="text-sm opacity-60">{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
