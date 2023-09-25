import { create } from 'zustand'
import { Product } from '@prisma/client'

export type CartProduct = Product & {
  count: number
}

type UseCart = {
  items: CartProduct[]
  totalPrice: number
  addItem: (item: Product) => void
  incrementItemCount: (itemId: string) => void
  decrementItemCount: (itemId: string) => void
}

export const useCart = create<UseCart>()((set) => ({
  items: [],
  totalPrice: 0,
  addItem: (item) =>
    set((state) => {
      const items = state.items
      const newItem = { ...item, count: 1 }

      if (items.length === 0) {
        const newItems = [newItem]
        return {
          items: newItems,
          totalPrice: calculateTotalPrice(newItems),
        }
      }

      const existItemIndex = items.findIndex(
        (product) => product.id === item.id
      )

      if (existItemIndex !== -1) {
        items[existItemIndex].count++
      } else {
        items.push(newItem)
      }

      const totalPrice = items.reduce(
        (acc, item) => acc + +item.price * item.count,
        0
      )

      return {
        items,
        totalPrice: calculateTotalPrice(items),
      }
    }),
  incrementItemCount: (itemId) =>
    set((state) => {
      const items = state.items.map((product) =>
        product.id === itemId
          ? { ...product, count: product.count + 1 }
          : product
      )

      return {
        items,
        totalPrice: calculateTotalPrice(items),
      }
    }),
  decrementItemCount: (itemId) =>
    set((state) => {
      const items = state.items
        .map((product) => {
          if (product.id === itemId) {
            return product.count === 1
              ? null
              : { ...product, count: product.count - 1 }
          }

          return product
        })
        .filter((item) => item) as CartProduct[]

      return {
        items,
        totalPrice: calculateTotalPrice(items),
      }
    }),
}))

function calculateTotalPrice(items: CartProduct[]) {
  return items.reduce((acc, item) => acc + +item.price * item.count, 0)
}
