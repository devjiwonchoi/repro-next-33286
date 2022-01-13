import type { NextPage } from "next"
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
        padding: "5vw",
      }}
    >
      <h1>The buttons on `/foo` will be colored correctly RED, because they are not rendered here...</h1>
      <Link href="/foo">
        <a>/foo</a>
      </Link>
    </div>
  )
}

export default Home
