import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex h-screen text-blue-500 items-center justify-center -p3">
      <SignIn />
    </div>
  );
}
