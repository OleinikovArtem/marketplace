'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { NavbarCart } from '@/components/navigation/navbar-cart'

import { ShoppingCart } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/useCart'

type Props = {}

function CartItem() {
  const cart = useCart()

  const itemsCount = cart.items.length

  return (
    <>
      <NavigationMenuTrigger className="px-2 py-0 relative">
        {itemsCount ? (
          <span className="border rounded-full text-sm text-yellow-300 bg-zinc-700 w-5 h-5">
            {cart.items.length}
          </span>
        ) : null}
        <ShoppingCart className="w-5 h-5" />
      </NavigationMenuTrigger>
      <NavigationMenuContent asChild className="md:w-[420px]">
        <NavbarCart items={cart.items} totalPrice={cart.totalPrice} />
      </NavigationMenuContent>
    </>
  )
}

export function Navbar(props: Props) {
  return (
    <div className="fixed container top-0 bg-white w-full dark:bg-zinc-700">
      <NavigationMenu className="max-w-full">
        <NavigationMenuList className="flex justify-center gap-4">
          <NavigationMenuItem>Logo</NavigationMenuItem>
          <NavigationMenuItem className="navigation__cart__item">
            <CartItem />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </div>
  )
}
