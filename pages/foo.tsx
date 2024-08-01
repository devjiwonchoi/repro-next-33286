import dynamic from 'next/dynamic'

const DynamicImportRedButton = dynamic<{}>(
  () => import('@/components/red').then((module) => module.Red),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
)

export default function Foo() {
  return <DynamicImportRedButton />
}
