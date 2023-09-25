import { useCart } from '@/hooks/useCart'

import { NavbarCartProduct } from '@/components/navigation/navbar-cart-product'
import { Separator } from '@/components/ui/separator'

type Props = {}

export function NavbarCart(props: Props) {
  const cart = useCart()

  return (
    <div className="flex flex-col p-5 w-[320px]">
      {cart.items.length === 0 && <p>There is empty yet...</p>}
      {cart.items.map((product) => (
        <NavbarCartProduct key={product.id} product={product} />
      ))}
      <Separator className="my-4" />
      <p>
        total price: <b>{cart.totalPrice}</b>
      </p>
    </div>
  )
}
