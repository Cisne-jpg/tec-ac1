import Image from "next/image";
import Rectangle from "./components/Rectangle";
import Link from "next/link";

export default function Home() {
  return (
    <div className = "min-h-screen flex flex-col items-center justify-center gap-4">
      <Rectangle color ="green" />
      <Link href="/page2" className="text-blue-500 hover:underline">
      Go to Page 2
      </Link>
    </div>
  );
}
