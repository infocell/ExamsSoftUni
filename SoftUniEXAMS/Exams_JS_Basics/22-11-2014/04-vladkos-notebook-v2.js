function solve(input) {
    //"use strict";
    var result = {},
        output = {};

    input.forEach(function (line) {
        var color,
            property,
            value,
            rank;

        line = line.split('|');
        color = line[0].trim();
        property = line[1].trim();
        value = line[2].trim();

        if (!result[color]) {
            result[color] = {wins: 0, losses: 0, opponents: []};
        }

        switch (property) {
            case 'win':
                result[color].wins += 1;
                result[color].opponents.push(value);
                break;
            case 'loss':
                result[color].losses += 1;
                result[color].opponents.push(value);
                break;
            case 'name':
            case 'age':
            default :
                result[color][property] = value;
                break;
        }
    });

    Object.keys(result).sort().filter(function (key) {
        return result[key].name && result[key].age;
    }).forEach(function (key) {
        output[key] = {
            age: result[key].age,
            name: result[key].name,
            opponents: result[key].opponents.sort(),
            rank: ((result[key].wins + 1) / (result[key].losses + 1)).toFixed(2)
        }
    });
    console.log(JSON.stringify(output));
}

//solve([
//    'purple|age|99',
//    'red|age|44',
//    'blue|win|pesho',
//    'blue|win|mariya',
//    'purple|loss|Kiko',
//    'purple|loss|Kiko',
//    'purple|loss|Kiko',
//    'purple|loss|Yana',
//    'purple|loss|Yana',
//    'purple|loss|Manov',
//    'purple|loss|Manov',
//    'red|name|gosho',
//    'blue|win|Vladko',
//    'purple|loss|Yana',
//    'purple|name|VladoKaramfilov',
//    'blue|age|21',
//    'blue|loss|Pesho'
//]);
