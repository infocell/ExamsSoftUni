function solve(input) {
    //"use strict";
    var starSystem = [],
        lastRow,
        normandy = {},
        numberOfTurns,
        locations = [],
        isPush;

    numberOfTurns = Number(input.pop());

    lastRow = input.pop().split(/\s+/g);
    normandy.x = Number(lastRow[0]);
    normandy.y = Number(lastRow[1]);

    input.forEach(function (line) {
        line = line.split(/\s+/g);
        starSystem.push({
                name: line[0].toLowerCase(),
                x: Number(line[1]),
                y: Number(line[2])
            });
    });
    //console.log(normandy)
    for (var i = 0; i <= numberOfTurns; i++) {
        isPush = false;
        starSystem.forEach(function (elem) {
            if (normandy.x >= elem.x - 1 &&
                normandy.x <= elem.x + 1 &&
                normandy.y <= elem.y + 1 &&
                normandy.y >= elem.y - 1) {

                locations.push(elem.name);
                isPush = true;
            }
        });
        normandy.y += 1;
        if (!isPush) {
            locations.push('space');
        }
    }
    console.log(locations.join('\n'))
}

//solve([
//    'Sirius 3 7',
//    'Alpha-Centauri 7 5',
//    'Gamma-Cygni 10 10',
//    '8 1',
//    '6'
//]);
//
//console.log();
//
//solve([
//    'Terra-Nova 16 2',
//    'Perseus 2.6 4.8',
//    'Virgo 1.6 7',
//    '2 5',
//    '4'
//]);
