let exciseRate;

export function setExciseRate(vehicleAge, engineVolume, engineType, hybridFuelType) {
    if (vehicleType === "car"|| (vehicleType === "motorcycle" && vehicleAge > 10) ) { // Проверка на наличие акциза для легковых автомобилей и мотоциклов(только бензин)
        let exciseRate;
        if (engineType === "gasoline" ||
            (engineType === 'hybrid' && hybridFuelType === 'full')) { // Стоимость акциза для бензиновых двигателей

            if (engineVolume <= 1000) {
                if (vehicleAge <= 2) {
                    exciseRate = 9.56;
                } else if (vehicleAge <= 4) {
                    exciseRate = 10.00;
                } else if (vehicleAge <= 6) {
                    exciseRate = 10.23;
                } else if (vehicleAge <= 7) {
                    exciseRate = 11.25;
                } else if (vehicleAge <= 8) {
                    exciseRate = 12.38;
                } else if (vehicleAge <= 9) {
                    exciseRate = 13.62;
                } else if (vehicleAge <= 10) {
                    exciseRate = 16.34;
                } else if (vehicleAge <= 11) {
                    exciseRate = 21.24;
                } else if (vehicleAge <= 12) {
                    exciseRate = 26.24;
                } else if (vehicleAge <= 13) {
                    exciseRate = 31.24;
                } else if (vehicleAge <= 14) {
                    exciseRate = 36.24;
                } else if (vehicleAge <= 15) {
                    exciseRate = 41.24;
                } else if (vehicleAge <= 16) {
                    exciseRate = 46.24;
                } else if (vehicleAge <= 17) {
                    exciseRate = 51.24;
                } else if (vehicleAge <= 18) {
                    exciseRate = 56.24;
                } else if (vehicleAge <= 19) {
                    exciseRate = 61.24;
                } else {
                    exciseRate = 66.24;
                }
            } else if (engineVolume <= 1500) {
                if (vehicleAge <= 2) {
                    exciseRate = 12.23;
                } else if (vehicleAge <= 4) {
                    exciseRate = 12.67;
                } else if (vehicleAge <= 6) {
                    exciseRate = 12.90;
                } else if (vehicleAge <= 7) {
                    exciseRate = 14.19;
                } else if (vehicleAge <= 8) {
                    exciseRate = 15.61;
                } else if (vehicleAge <= 9) {
                    exciseRate = 17.17;
                } else if (vehicleAge <= 10) {
                    exciseRate = 20.60;
                } else if (vehicleAge <= 11) {
                    exciseRate = 26.79;
                } else if (vehicleAge <= 12) {
                    exciseRate = 31.79;
                } else if (vehicleAge <= 13) {
                    exciseRate = 36.79;
                } else if (vehicleAge <= 14) {
                    exciseRate = 41.79;
                } else if (vehicleAge <= 15) {
                    exciseRate = 46.79;
                } else if (vehicleAge <= 16) {
                    exciseRate = 51.79;
                } else if (vehicleAge <= 17) {
                    exciseRate = 56.79;
                } else if (vehicleAge <= 18) {
                    exciseRate = 61.79;
                } else if (vehicleAge <= 19) {
                    exciseRate = 66.79;
                } else {
                    exciseRate = 71.79;
                }
            } else if (engineVolume <= 2000) {
                if (vehicleAge <= 2) {
                    exciseRate = 18.90;
                } else if (vehicleAge <= 4) {
                    exciseRate = 19.34;
                } else if (vehicleAge <= 6) {
                    exciseRate = 19.57;
                } else if (vehicleAge <= 7) {
                    exciseRate = 21.53;
                } else if (vehicleAge <= 8) {
                    exciseRate = 23.68;
                } else if (vehicleAge <= 9) {
                    exciseRate = 26.05;
                } else if (vehicleAge <= 10) {
                    exciseRate = 31.26;
                } else if (vehicleAge <= 11) {
                    exciseRate = 40.63;
                } else if (vehicleAge <= 12) {
                    exciseRate = 45.79;
                } else if (vehicleAge <= 13) {
                    exciseRate = 50.63;
                } else if (vehicleAge <= 14) {
                    exciseRate = 55.63;
                } else if (vehicleAge <= 15) {
                    exciseRate = 60.63;
                } else if (vehicleAge <= 16) {
                    exciseRate = 65.63;
                } else if (vehicleAge <= 17) {
                    exciseRate = 70.63;
                } else if (vehicleAge <= 18) {
                    exciseRate = 75.63;
                } else if (vehicleAge <= 19) {
                    exciseRate = 80.63;
                } else {
                    exciseRate = 85.63;
                }
            } else if (engineVolume <= 3000) {
                if (vehicleAge <= 2) {
                    exciseRate = 31.14;
                } else if (vehicleAge <= 4) {
                    exciseRate = 31.68;
                } else if (vehicleAge <= 6) {
                    exciseRate = 31.81;
                } else if (vehicleAge <= 7) {
                    exciseRate = 34.99;
                } else if (vehicleAge <= 8) {
                    exciseRate = 38.49;
                } else if (vehicleAge <= 9) {
                    exciseRate = 42.34;
                } else if (vehicleAge <= 10) {
                    exciseRate = 50.81;
                } else if (vehicleAge <= 11) {
                    exciseRate = 66.05;
                } else if (vehicleAge <= 12) {
                    exciseRate = 71.05;
                } else if (vehicleAge <= 13) {
                    exciseRate = 76.05;
                } else if (vehicleAge <= 14) {
                    exciseRate = 81.05;
                } else if (vehicleAge <= 15) {
                    exciseRate = 86.05;
                } else if (vehicleAge <= 16) {
                    exciseRate = 91.05;
                } else if (vehicleAge <= 17) {
                    exciseRate = 96.05;
                } else if (vehicleAge <= 18) {
                    exciseRate = 101.05;
                } else if (vehicleAge <= 19) {
                    exciseRate = 106.05;
                } else {
                    exciseRate = 111.05;
                }
            } else {
                if (vehicleAge <= 2) {
                    exciseRate = 55.60;
                } else if (vehicleAge <= 4) {
                    exciseRate = 56.04;
                } else if (vehicleAge <= 6) {
                    exciseRate = 56.27;
                } else if (vehicleAge <= 7) {
                    exciseRate = 61.90;
                } else if (vehicleAge <= 8) {
                    exciseRate = 68.09;
                } else if (vehicleAge <= 9) {
                    exciseRate = 74.90;
                } else if (vehicleAge <= 10) {
                    exciseRate = 89.87;
                } else if (vehicleAge <= 11) {
                    exciseRate = 116.84;
                } else if (vehicleAge <= 12) {
                    exciseRate = 121.84;
                } else if (vehicleAge <= 13) {
                    exciseRate = 126.84;
                } else if (vehicleAge <= 14) {
                    exciseRate = 131.84;
                } else if (vehicleAge <= 15) {
                    exciseRate = 136.84;
                } else if (vehicleAge <= 16) {
                    exciseRate = 141.84;
                } else if (vehicleAge <= 17) {
                    exciseRate = 146.84;
                } else if (vehicleAge <= 18) {
                    exciseRate = 151.84;
                } else if (vehicleAge <= 19) {
                    exciseRate = 156.84;
                } else {
                    exciseRate = 161.84;
                }
            }
        }
        if (engineType === "diesel" || (engineType === 'hybrid' && hybridFuelType === 'hdiesel')) { // Стоимость акциза для дизельных двигателей
            if (engineVolume <= 1500) {
                if (vehicleAge <= 2) {
                    exciseRate = 12.23;
                } else if (vehicleAge <= 4) {
                    exciseRate = 12.67;
                } else if (vehicleAge <= 6) {
                    exciseRate = 12.90;
                } else if (vehicleAge <= 7) {
                    exciseRate = 14.19;
                } else if (vehicleAge <= 8) {
                    exciseRate = 15.61;
                } else if (vehicleAge <= 9) {
                    exciseRate = 17.17;
                } else if (vehicleAge <= 10) {
                    exciseRate = 20.60;
                } else if (vehicleAge <= 11) {
                    exciseRate = 26.79;
                } else if (vehicleAge <= 12) {
                    exciseRate = 31.79;
                } else if (vehicleAge <= 13) {
                    exciseRate = 36.79;
                } else if (vehicleAge <= 14) {
                    exciseRate = 41.79;
                } else if (vehicleAge <= 15) {
                    exciseRate = 46.79;
                } else if (vehicleAge <= 16) {
                    exciseRate = 51.79;
                } else if (vehicleAge <= 17) {
                    exciseRate = 56.79;
                } else if (vehicleAge <= 18) {
                    exciseRate = 61.79;
                } else if (vehicleAge <= 19) {
                    exciseRate = 66.79;
                } else {
                    exciseRate = 71.79;
                }
            } else if (engineVolume <= 2500) {
                if (vehicleAge <= 2) {
                    exciseRate = 31.34;
                } else if (vehicleAge <= 4) {
                    exciseRate = 31.58;
                } else if (vehicleAge <= 6) {
                    exciseRate = 31.81;
                } else if (vehicleAge <= 7) {
                    exciseRate = 34.99;
                } else if (vehicleAge <= 8) {
                    exciseRate = 38.49;
                } else if (vehicleAge <= 9) {
                    exciseRate = 42.34;
                } else if (vehicleAge <= 10) {
                    exciseRate = 50.81;
                } else if (vehicleAge <= 11) {
                    exciseRate = 66.05;
                } else if (vehicleAge <= 12) {
                    exciseRate = 71.05;
                } else if (vehicleAge <= 13) {
                    exciseRate = 76.05;
                } else if (vehicleAge <= 14) {
                    exciseRate = 81.05;
                } else if (vehicleAge <= 15) {
                    exciseRate = 86.05;
                } else if (vehicleAge <= 16) {
                    exciseRate = 91.05;
                } else if (vehicleAge <= 17) {
                    exciseRate = 96.05;
                } else if (vehicleAge <= 18) {
                    exciseRate = 101.05;
                } else if (vehicleAge <= 19) {
                    exciseRate = 106.05;
                } else {
                    exciseRate = 111.05;
                }
            } else {
                if (vehicleAge <= 2) {
                    exciseRate = 55.60;
                } else if (vehicleAge <= 4) {
                    exciseRate = 56.04;
                } else if (vehicleAge <= 6) {
                    exciseRate = 56.27;
                } else if (vehicleAge <= 7) {
                    exciseRate = 61.90;
                } else if (vehicleAge <= 8) {
                    exciseRate = 68.90;
                } else if (vehicleAge <= 9) {
                    exciseRate = 74.90;
                } else if (vehicleAge <= 10) {
                    exciseRate = 89.87;
                } else if (vehicleAge <= 11) {
                    exciseRate = 116.84;
                } else if (vehicleAge <= 12) {
                    exciseRate = 121.84;
                } else if (vehicleAge <= 13) {
                    exciseRate = 126.84;
                } else if (vehicleAge <= 14) {
                    exciseRate = 131.84;
                } else if (vehicleAge <= 15) {
                    exciseRate = 136.84;
                } else if (vehicleAge <= 16) {
                    exciseRate = 141.84;
                } else if (vehicleAge <= 17) {
                    exciseRate = 146.84;
                } else if (vehicleAge <= 18) {
                    exciseRate = 151.84;
                } else if (vehicleAge <= 19) {
                    exciseRate = 156.84;
                } else {
                    exciseRate = 161.84;
                }
            }
        }
        //console.log(exciseRate);     

        let totalExcise = exciseRate * engineVolume;
        console.log('totalExcise', totalExcise);

        // Вывод результата

        $('#result').text(totalExcise.toFixed(2) + ' lei');
    } else {
        // расчет акцизов для мотоцикла
        if ($('#vehicle-type' === "motorcycle") && vehicleAge <= 10) {
            totalExcise = 0;
        }
}
}
export function getExciseRate() {
    return exciseRate;
}
