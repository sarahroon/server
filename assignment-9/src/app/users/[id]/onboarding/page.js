import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/utils/connect";

export default function OnboardingPage() {
  async function handleSubmitNewUser(formData) {
    "use server";
    // we need to submit the username, bio, and clerk id to our database
    const { username, bio } = Object.fromEntries(formData);
    const { userId } = await auth();

    const inserted = await db.query(
      `insert into user_account (username, bio, clerk_id) values ($1, $2, $3)`,
      [username, bio, userId],
    );

    redirect(`/users/${userId}`);
  }

  return (
    <div>
      <h2>Sign up to our website: please make a profile</h2>

      <form action={handleSubmitNewUser}>
        <input name="username" placeholder="username" />
        <input name="bio" placeholder="bio" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
