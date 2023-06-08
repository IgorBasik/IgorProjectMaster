import { getExciseRate } from './modules/exciseRate.js';

export function calculateHybridExciseRate(engineType, hybridType) {
  let exciseRate = getExciseRate();

     // Уменьшение ставки акциза для гибридных автомобилей

     if (engineType === "hybrid") {
        if (hybridType === "plugin") { // Плагин-гибрид
            exciseRate = exciseRate / 2;
        } else if (hybridType === "full") { // Полный гибрид
            exciseRate = exciseRate * 0.75;
        }
    }

  return exciseRate;
}