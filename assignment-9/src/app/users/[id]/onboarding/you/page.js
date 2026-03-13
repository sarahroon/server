import { getUser } from "@/utils/getUser";
import { db } from "@/utils/connect";
import Link from "next/link";

export default async function UserPage() {
  // this will always read the currently looged in user
  // could we read from params to get other user profiles?
  const user = await getUser();

  // fetch our reviews
  const reviews = (
    await db.query(
      `
            select review.*, books.title 
            FROM review
            JOIN books 
            ON review.book_id = books.id
            WHERE review.user_id = $1
        `,
      [user[0].id],
    )
  ).rows;

  console.log(reviews);
  return (
    <div>
      <p>This is the user page</p>
      <p>{user[0].username}</p>
      <p>bio: </p>
      <p>{user[0].bio}</p>

      <div>
        <h2>Your reviews</h2>
        {reviews.length === 0 ? (
          <p>You haven't reviewed anything yet</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <Link href={`/books/${review.book_id}`}>
                  <strong>{review.title}</strong>
                </Link>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
