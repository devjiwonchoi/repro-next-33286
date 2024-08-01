import { Red } from '@/components/red'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/foo">
        <a>/foo</a>
      </Link>
      <Red />
    </>
  )
}
