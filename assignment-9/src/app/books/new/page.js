import { db } from "@/utils/connect";
import { getUser } from "@/utils/getUser";
import { redirect } from "next/navigation";

export default async function NewBookPage() {
  // check if user is loged in
  const user = await getUser();

  async function handleAddBook(formData) {
    "use server";
    // pull the feilds from the form data
    const { title, author, description, quote, released, img_url } =
      Object.fromEntries(formData);

    // inset the new book into the database
    const result = await db.query(
      `INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [title, author, description, quote, released, img_url],
    );

    // redirect to the new books page
    redirect(`/books/${result.rows[0].id}`);
  }

  return (
    <div>
      <h1>Add a New Book</h1>

      <form action={handleAddBook}>
        <input name="title" placeholder="Book title" required />
        <input name="author" placeholder="Author" required />
        <textarea name="description" placeholder="Description" />
        <input name="quote" placeholder="A memorable quote" />
        <input name="released" type="date" placeholder="Release date" />
        <input name="img_url" placeholder="Cover image URL" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
