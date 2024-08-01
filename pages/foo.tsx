import dynamic from 'next/dynamic'

const DynamicImportRedButton = dynamic<{}>(
  () => import('@/components/red').then((module) => module.Red),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
)
const Foo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '5vw',
      }}
    >
      <h1>Foo Page</h1>
      <p>
        If you load this page directly, the button should be red. If you load
        one of the routes, then click the link to this page, then click the link
        to this page, one of the buttons will have a gray background (only when
        doing yarn build)
      </p>
      <p>
        The red and green buttons are dynamically imported. The blue button is
        not
      </p>
      <DynamicImportRedButton />
    </div>
  )
}

export default Foo
