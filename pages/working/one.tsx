import { Red } from "@/components/red"
import { Green } from "@/components/green"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Click /foo, the buttons will be the correct color, because we load both the red and green buttons?</h1>
      <Link href="/foo">
        <a>/foo</a>
      </Link>
      <Red />
      <Green />
    </div>
  )
}

export default Home
