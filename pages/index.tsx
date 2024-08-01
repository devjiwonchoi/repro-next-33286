import { Red } from "@/components/red";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/foo">/foo</Link>
      {/* This Red should be imported to be reproduced */}
      <Red />
    </>
  );
}
