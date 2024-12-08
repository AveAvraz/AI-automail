import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center -p3">
      <SignUp />
    </div>
  );
}
