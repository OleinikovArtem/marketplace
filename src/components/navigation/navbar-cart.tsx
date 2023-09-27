import { CartProduct, useCart } from '@/hooks/useCart'

import { NavbarCartProduct } from '@/components/navigation/navbar-cart-product'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

type Props = { items: CartProduct[]; totalPrice: number }

export function NavbarCart({ items, totalPrice }: Props) {
  return (
    <div className="flex flex-col p-5 w-full md:w-[420px]">
      {items.length === 0 ? (
        <p>There is empty yet...</p>
      ) : (
        <ScrollArea className="h-72 rounded-md">
          {items.map((product) => (
            <NavbarCartProduct key={product.id} product={product} />
          ))}
        </ScrollArea>
      )}
      <Separator className="my-4" />
      <p>
        total price: <b>{totalPrice}</b>
      </p>
    </div>
  )
}
