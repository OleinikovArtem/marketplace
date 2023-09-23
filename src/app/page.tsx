import { ProductsList } from '@/components/products/products-list'

export default async function Home() {
  return (
    <main className="flex min-h-screen w-screen">
      <ProductsList />
    </main>
  )
}
