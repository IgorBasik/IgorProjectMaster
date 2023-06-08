import { getExciseRate } from './modules/exciseRate.js';

export function calculateCost(carPrice, engineVolume, engineType, hybridType, age) {
  let exciseRate = 0;
  let totalExcise = 0;

  if (engineType !== 'motorcycle') {
    // Calculate excise rate
    exciseRate = getExciseRate();

    // Уменьшение ставки акциза для гибридных автомобилей
    if (engineType === 'hybrid') {
      if (hybridType === 'plugin') {
        exciseRate /= 2;
      } else if (hybridType === 'full') {
        exciseRate *= 0.75;
      }
    }

    totalExcise = exciseRate * engineVolume;
  } else {
    // No excise for motorcycles or electric cars
    return 'No excise for motorcycles or electric cars.';
  }

  // Calculate other costs
  const exciseCost = 1000;
  const vatCost = engineType === 'motorcycle' ? carPrice * 0.2 * 19 : 0;
  const customsProceduresCost = 160;
  const customsExpensesCost = 4000;
  const totalCost = exciseCost + vatCost + customsProceduresCost + customsExpensesCost;

  // Return the calculated total cost
  return totalCost.toFixed(2);
}