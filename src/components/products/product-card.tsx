'use client'
import { Product } from '@prisma/client'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { useCart } from '@/hooks/useCart'

import { cn } from '@/lib/utils'

type Props = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: Props) {
  const cart = useCart()
  return (
    <Card className={cn('w-[320px] p-0 hover:cursor-pointer', className)}>
      <Image src={product.image} width="320" height="200" alt={product.name} />
      <CardContent className="p-0">
        <CardHeader className="hover:bg-indigo-50">
          <CardTitle className="text-md">{product.name}</CardTitle>
          <CardDescription className="text-md">
            {product.description}
          </CardDescription>
        </CardHeader>
        <Separator className="mb-5" />
        <CardFooter className="flex justify-between">
          <CardTitle className="text-sm">{product.price}$</CardTitle>
          <Button variant="default" onClick={() => cart.addItem(product)}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to cart
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
