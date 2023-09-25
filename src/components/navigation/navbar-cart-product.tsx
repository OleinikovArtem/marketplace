'use client'
import { CartProduct, useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

type Props = {
  product: CartProduct
}

export function NavbarCartProduct({ product }: Props) {
  const cart = useCart()

  return (
    <div className="flex py-3">
      <Image
        src={product.image}
        width="120"
        height="60"
        alt={product.name}
        className="rounded"
      />
      <div>
        <p className="pl-3 py-3 text-sm">{product.name}</p>
        <Separator />
        <p className="pl-3 py-3 text-sm">price: {product.price}$</p>
        <div className="flex justify-between p-3">
          <p className="flex">
            <strong className="mr-2">count:</strong>
            <div className="flex">
              <Minus
                className="border rounded mr-2"
                onClick={() => cart.decrementItemCount(product.id)}
              />
              <b>{product.count}</b>
              <Plus
                className="border rounded ml-2"
                onClick={() => cart.incrementItemCount(product.id)}
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
