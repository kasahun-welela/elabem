import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[90%] mx-auto mt-24  flex flex-col justify-center items-center py-32">
      <h2 className="text-3xl font-bold my-4 text-center">Not Found</h2>
      <p>Your visited page not found. You may go home page.</p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary/50 p-3 rounded-sm text-white inline-block mt-6"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
