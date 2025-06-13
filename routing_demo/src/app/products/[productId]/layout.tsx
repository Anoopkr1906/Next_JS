export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1 style={{backgroundColor: 'lightgreen'}}>Product Detail Layout</h1>
      {children}
    </>
  )
}