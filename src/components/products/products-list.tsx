import { ProductCard } from '@/components/products/product-card'

import { db } from '@/lib/db'

type Props = {}

export async function ProductsList(props: Props) {
  const products = await db.product.findMany()

  return (
    <div className="mx-auto w-max">
      <div className="flex flex-wrap gap-5 items-start justify-left py-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
