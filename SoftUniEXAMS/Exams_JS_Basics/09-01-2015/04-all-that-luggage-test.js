function solve(input) {
    //'use strict';
    var sortingCriterion,
        ownerName,
        luggageName,
        isFood,
        isDrink,
        isFragile,
        weightInKg,
        transferredWith,
        typeOfTheLuggage,
        result = {},
        output = {};

    sortingCriterion = input.pop();

    input.forEach(function (line) {
        var elem;
        elem = line.split(/\.*[\*]\.*/g);
        ownerName = elem[0];
        luggageName = elem[1];
        isFood = elem[2];
        isDrink = elem[3];
        isFragile = elem[4];
        weightInKg = elem[5];
        transferredWith = elem[6];

        //(isFood === 'true') ? typeOfTheLuggage = 'food' : isDrink === 'true' ? typeOfTheLuggage = 'drink' : typeOfTheLuggage = 'other';

        typeOfTheLuggage = 'other';
        if(isFood === 'true') {
            typeOfTheLuggage = 'food';
        }
        if (isDrink === 'true') {
            typeOfTheLuggage = 'drink';
        }

        if(!result[ownerName]) {
            result[ownerName] = {};
        }
        if(!result[ownerName][luggageName]) {
            result[ownerName][luggageName] = {};
        }

        result[ownerName][luggageName] = {
            kg: parseFloat(weightInKg),
            fragile: isFragile === 'true',
            type: typeOfTheLuggage,
            transferredWith: transferredWith
        };

    });

    switch (sortingCriterion) {
        case 'luggage name':
            Object.keys(result).forEach(function (key) {
                output[key] = {};
                Object.keys(result[key]).sort(function (a, b) {
                    return a.localeCompare(b);
                }).forEach(function (innerKey) {
                    output[key][innerKey] = result[key][innerKey];
                });
            });
            break;
        case 'weight':
            Object.keys(result).forEach(function (key) {
                output[key] = {};
                Object.keys(result[key]).sort(function (a, b) {
                    //console.log(result[key][a].kg)
                    return result[key][a].kg - result[key][b].kg;
                }).forEach(function (innerKey) {
                    output[key][innerKey] = result[key][innerKey];
                });
            })

            break;
        case 'strict':
            output = result;
            break;
        default :
            output = result;
            break;
    }
    console.log(JSON.stringify(output));

}

solve([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'luggage name'
])