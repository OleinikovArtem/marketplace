import Link from 'next/link'
import { db } from '@/lib/db'
import Image from 'next/image'

type Props = {
  params: {
    productId: string
  }
}

export default async function ProductId({ params }: Props) {
  const product = await db.product.findFirst({
    where: { id: params.productId },
  })

  if (!product) {
    return (
      <main className="flex container">
        <h1>Product not found</h1>
        <Link href="">to products list</Link>
      </main>
    )
  }

  return (
    <main className="flex container flex-col">
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={200} />
      <p>{product.description}</p>
    </main>
  )
}
