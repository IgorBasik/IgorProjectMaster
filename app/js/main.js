import { calculateCost } from './modules/costCalculation.js';
import { calculateHybridExciseRate } from './modules/hybridExcise.js';

// Get input values from HTML form
$('#calculate').on('click', function (e) {
    e.preventDefault();
    let vehicleType = $('#vehicle-type').val();
    let engineType = $('#engine-type').val();
    let hybridType = $('#hybrid-type').val();
    let hybridFuelType = $('#hybrid-type-motorina').val();
    let releaseYear = $('#year-of-manufacture').val();
    let engineVolume = $('#engine-volume').val();
    let carPrice = $('#car-price').val();

    console.log('vehicleType', vehicleType);
    console.log('engineType', engineType);
    console.log('hybridType', hybridType);
    console.log('hybridFuelType', hybridFuelType);
    console.log('releaseYear', releaseYear);
    console.log('engineVolume', engineVolume);
    console.log('carPrice', carPrice);

    let now = new Date().getFullYear(); // Текущий год
    let vehicleAge = now - releaseYear; // Вычисляем возраст автомобиля
    console.log('vehicleAge', vehicleAge);

// Calculate hybrid excise rate
const exciseRate = calculateHybridExciseRate(engineType, hybridType);

// Calculate cost
const totalCost = calculateCost(carPrice, engineVolume, engineType, hybridType, age);

// Display results
console.log('Excise Rate:', exciseRate);
console.log('Total Cost:', totalCost);