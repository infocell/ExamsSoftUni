function solve(input) {
    'use strict';
    var ownerName,
        luggageName,
        isFood,
        isDrink,
        isFragile,
        weightInKg,
        transferedWith,
        sortingCriterion,
        type,
        arr = [],
        result = {},
        output = {};
    //console.log(input);

    input.forEach(function(line){
        arr = line.split(/\.{0,}\*\.{0,}/g);
        if (arr.length !== 1) {
            ownerName = arr[0];
            luggageName = arr[1];
            isFood = arr[2];
            isDrink = arr[3];
            isFragile = arr[4];
            weightInKg = arr[5];
            transferedWith = arr[6];
        } else {
            sortingCriterion = arr[0];
        }

        if (!sortingCriterion) {

            if (!result[ownerName]) {
                result[ownerName] = {};
            }

            if (!result[ownerName][luggageName]) {
                result[ownerName][luggageName] = {};
            }

            //console.log(isFood+ ' ' + isDrink);
            if (isFood === 'true') {
                type = 'food';
            } else if (isDrink === 'true') {
                type = 'drink';
            } else {
                type = 'other';
            }


            result[ownerName][luggageName] = {
                kg : Number(weightInKg),
                fragile : (isFragile === 'true' ? true : false),
                type : type,
                transferredWith : transferedWith
            };

        }
    });

    switch (sortingCriterion) {
        case 'strict':
            output = result;
            break;
        case 'weight':

            Object.keys(result).forEach(function (key) {
                output[key] = {};
                Object.keys(result[key]).sort(function(a, b) {
                    return result[key][a].kg - result[key][b].kg;
                }).forEach(function(innerKey) {
                    output[key][innerKey] = result[key][innerKey];
                });
            });
            break;

        case 'luggage name':
            Object.keys(result).forEach(function(key){
                output[key] = {};
                Object.keys(result[key]).sort().forEach(function(innerKey){
                    output[key][innerKey] = result[key][innerKey]
                });
            });
            break;
    }


    //console.log(JSON.stringify(result));
    console.log(JSON.stringify(output));


}


solve([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight'
]);