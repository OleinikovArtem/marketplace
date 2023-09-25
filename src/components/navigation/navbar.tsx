'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { NavbarCart } from '@/components/navigation/navbar-cart'

import { ShoppingCart } from 'lucide-react'

type Props = {}

export function Navbar(props: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <ShoppingCart />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavbarCart />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
