import { SLOT_ITEMS, SlotItem } from './constants'

const pickRandom = <T>(arr: T[]) => arr.at(Math.floor(Math.random() * arr.length))

/**
 * Creates a bet array for given wager amount and max payout
 */
export const generateBetArray = (
  maxPayout: number,
  wager: number,
  winnerMultiplier: number, // Nuevo parámetro para el multiplicador del ítem ganador
  maxLength = 50,
) => {
  const maxMultiplier = Math.min(maxLength, maxPayout / wager - winnerMultiplier); // Restar el multiplicador del ítem ganador del máximo
  const arr = Array.from({ length: maxLength }).fill(0) as number[];
  let total = 0;

  // Asegurarse de que el multiplicador del ítem ganador sea menor o igual al máximo permitido
  const limitedWinnerMultiplier = Math.min(winnerMultiplier, maxMultiplier);

  if (!maxMultiplier) return [];

  let i = 0;

  // Agregar el ítem ganador a la matriz
  arr[i] = limitedWinnerMultiplier;
  total += limitedWinnerMultiplier;
  i++;

  while (total < maxLength && total + limitedWinnerMultiplier <= maxPayout / wager) {
    const left = maxLength - total;
    const pickableItems = SLOT_ITEMS.filter((x) => x.multiplier <= Math.min(left, maxMultiplier));
    const item = pickRandom(pickableItems);
    if (item) {
      total += item.multiplier;
      arr[i] = item.multiplier;
    }
    i++;
    if (i > 1000) break;
  }

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
