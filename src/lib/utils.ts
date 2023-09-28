import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shorteningText(text: string, length = 50): string {
  const words = text.split(' ')
  let stop = false
  return words.reduce((result, word) => {
    if (stop) return result
    const currentString = result + ' ' + word

    if (currentString.length < length) {
      return currentString
    }

    stop = true

    return result + '...'
  }, '')
}
