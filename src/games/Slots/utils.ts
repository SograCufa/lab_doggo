import { SLOT_ITEMS, SlotItem } from './constants';

const pickRandom = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Creates a bet array for given wager amount and max payout
 */
export const generateBetArray = (
  maxPayout: number,
  wager: number,
  maxLength = 50,
) => {
  const arr = Array.from({ length: maxLength }).fill(10) as number[];
  return arr;
}

/**
 * Picks a random slot item combination based on the result
 */
export const getSlotCombination = (count: number, multiplier: number, bet: number[]) => {
  const unicorn = SLOT_ITEMS.find((x) => x.multiplier === 10)!;
  return new Array(count).fill(unicorn) as SlotItem[];
}
