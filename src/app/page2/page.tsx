import Link from "next/link";
import Rectangle from "../components/Rectangle";

export default function Page2() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">
        <div className="grid grid-cols-3 gap-2">
          <Rectangle color="blue" />
          <Rectangle color="red" />
          <Rectangle color="blue" />
          <Rectangle color="red" />
          <Rectangle color="blue" />
          <Rectangle color="red" />
          <Rectangle color="blue" />
          <Rectangle color="red" />
          <Rectangle color="blue" />
        </div>
        <Link href="/" className="text-blue-500 hover:underline">
          Go to Home
        </Link>
      </div>
    );
}
