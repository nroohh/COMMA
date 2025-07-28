import Image from "next/image";
import Link from 'next/link';
import "./globals.css";

export default function Home() {
  return (
    <>
      <div>Wow</div>
      <Link href="/about">Go to About Page</Link>
    </>
  );
}
