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
  const specificItem = pickSpecificSlotItemByMultiplier(10); // Elige el elemento específico con multiplicador 10

  // Si no se encuentra el elemento específico, o si el multiplicador 10 es mayor que el máximo de pago, devuelve un arreglo vacío
  if (!specificItem || specificItem.multiplier * maxLength > maxPayout) return [];

  // Devuelve un arreglo con el multiplicador 10 repetido maxLength veces
  return Array.from({ length: maxLength }, () => specificItem.multiplier);
};

/**
 * Picks a random slot item combination based on the result
 */
export const getSlotCombination = (count: number, multiplier: number, bet: number[]) => {
  // Si el multiplicador es mayor que 0, devuelve una combinación de elementos idénticos
  if (multiplier > 0) {
    const specificItem = pickSpecificSlotItemByMultiplier(10); // Elige el elemento específico con multiplicador 10
    return new Array(count).fill(specificItem) as SlotItem[];
  }

  // Si el multiplicador es 0 (no ganador), puedes devolver una combinación aleatoria basada en la apuesta
  const availableSlotItems = SLOT_ITEMS.filter((x) => bet.includes(x.multiplier));

  // Devuelve una combinación aleatoria de elementos disponibles basada en la apuesta
  const combination = Array.from({ length: count }, () => pickRandom(availableSlotItems));
  return combination;
};
