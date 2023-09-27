import { ProductsList } from '@/components/products/products-list'

export default async function Home() {
  return (
    <main className="flex min-h-screen container">
      <ProductsList />
    </main>
  )
}
