import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Go to one of these pages, REFRESH, then click the /foo link.</h1>
      <Link href="/broken/one">
        <a>/broken/one</a>
      </Link>
      <Link href="/broken/two">
        <a>/broken/two</a>
      </Link>
    </div>
  )
}

export default Home
