function solve(input) {
    'use strict';
    var carModerl,
        fuelType,
        baseConsum,
        extraSnowCons,
        totalConsum,
        extraFuel,
        routeNumber,
        luggageWeight,
        result,
        add,
        totalAmount,
        arr,
        snow,
        length;


    input.forEach(function(currentLine){
        arr = currentLine.split(/\s+/g);
        carModerl = arr[0];
        fuelType = arr[1];
        routeNumber = arr[2];
        luggageWeight = arr[3];

        switch (fuelType) {
            case 'gas' : baseConsum = 10*1.2;
                break;
            case 'petrol' : baseConsum = 10;
                break;
            case 'diesel' : baseConsum = 10*0.8;
                break;
        }

        extraFuel = luggageWeight * 0.01;

        baseConsum = baseConsum + extraFuel;

        if(routeNumber === 1) {
            length = 110;
            snow = 10;
        } else {
            length = 95;
            snow = 30;
        }

        totalConsum = length*(baseConsum/100);
        extraSnowCons = 0.3 * baseConsum;

        add = snow*(extraSnowCons/100)

        totalAmount = add + totalConsum;
        console.log(carModerl + ' ' + fuelType + ' ' + routeNumber + ' '+ totalAmount.toFixed());

    });
}

solve([

    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'
])