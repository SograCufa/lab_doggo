import { SLOT_ITEMS, SlotItem } from './constants'

const specificSlotItem = pickSpecificSlotItemByMultiplier(10);

/**
 * Creates a bet array for given wager amount and max payout
 */
export const generateBetArray = (
  maxPayout: number,
  wager: number,
  maxLength = 50,
) => {
  const maxMultiplier = Math.min(maxLength, maxPayout / wager)
  const specificItem = pickSpecificSlotItemByMultiplier(10); // Elige el elemento específico con multiplicador 10
  const total = specificItem?.multiplier * maxLength; // Calcula el total necesario para obtener la apuesta ganadora


  // Si no se encuentra el elemento específico o si el total supera el máximo de pago, devuelve un arreglo vacío
  if (!specificItem || total > maxPayout) return [];

  // Rellena el arreglo con el multiplicador específico
  arr.fill(specificItem.multiplier);

  return arr
}

/**
 * Picks a random slot item combination based on the result
 */
export const getSlotCombination = (count: number, multiplier: number, bet: number[]) => {
  // When we win, all slots are the same
  if (multiplier > 0) {
    const items = SLOT_ITEMS.filter((x) => x.multiplier === multiplier)
    const item = pickRandom(items) ?? pickRandom(SLOT_ITEMS.filter((x) => x.multiplier < 1))
    return new Array(count).fill(item) as SlotItem[]
  }

  // Simulate a random roll
  const availableSlotItems = SLOT_ITEMS.filter((x) => bet.includes(x.multiplier))

  const { items } = Array.from({ length: count })
    .reduce<{items: SlotItem[], previous: SlotItem}>(
    ({ previous, items }, _, i) => {
      const item = (() => {
        // Make sure we don't pick one that has been selected
        if (i === count - 1) {
          return pickRandom(availableSlotItems.filter((x) => !items.includes(x))) ?? pickRandom(SLOT_ITEMS)!
        }

        // Pick a random one
        return Math.random() < .75 ? previous : pickRandom(availableSlotItems)!
      })()

      return { previous: item, items: [...items, item] }
    }
    , { previous: pickRandom(availableSlotItems)!, items: [] })

  return items
}
