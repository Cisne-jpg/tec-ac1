import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function Page2() {
  return (
    <div className = "min-h-screen flex items-center justify-center">
      <Link href="/" className="text-blue-500 hover:underline">
  Go back to home
  </Link>
      <div className="w-64 h-32 bg-green-500"></div>
    </div>
  );
}
