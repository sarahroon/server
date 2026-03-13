import { getUser } from "@/utils/getUser";
import { db } from "@/utils/connect";
import Link from "next/link";

export default async function UserPage({ params }) {
  const { id } = await params;
  // this will always read the currently looged in user
  // could we read from params to get other user profiles?

  // stretch goal

  return (
    <div>
      <p>display stuff</p>
    </div>
  );
}
