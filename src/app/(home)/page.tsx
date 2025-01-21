import Link from "next/link";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        Click&nbsp;
        <Link href="/documents/123">
          <span className="text-blue-500 underline">here</span>
        </Link>
        &nbsp; to go to document
      </div>
    </div>
  );
}
