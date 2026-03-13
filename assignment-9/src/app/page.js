import { getUser } from "@/utils/getUser";

export default async function Home() {
  const userDetails = await getUser();
  return (
    <div>
      <p>This is a landing page.</p>
    </div>
  );
}
