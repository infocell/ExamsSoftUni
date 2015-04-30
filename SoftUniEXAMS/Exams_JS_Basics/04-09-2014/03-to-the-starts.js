function solve(input) {

    var first = {},
        second = {},
        third = {},
        current = {},
        numbersOfTurns,
        result = [],
        tempArr = [],
        numberOfTurns;

    tempArr = input[0].split(/\s+/g);
    first['name'] = tempArr[0].toLowerCase();
    first['x'] = parseFloat(tempArr[1]);
    first['y'] = parseFloat(tempArr[2]);

    tempArr = input[1].split(/\s+/g);
    second['name'] = tempArr[0].toLowerCase();
    second['x'] = parseFloat(tempArr[1]);
    second['y'] = parseFloat(tempArr[2]);

    tempArr = input[2].split(/\s+/g);
    third['name'] = tempArr[0].toLowerCase();
    third['x'] = parseFloat(tempArr[1]);
    third['y'] = parseFloat(tempArr[2]);

    tempArr = input[3].split(/\s+/g);
    //console.log(typeof parseFloat(tempArr[0]));
    current['x'] = parseFloat(tempArr[0]);
    current['y'] = parseFloat(tempArr[1]);

    numberOfTurns =  parseInt(input[4]);

    for (var i = 0; i <= numberOfTurns; i++) {
        if((current.x <= first.x+1 && current.x >= first.x-1) &&
            (current.y <= first.y+1 && current.y >= first.y-1)) {
            console.log(first.name);
        }else if((current.x <= second.x+1 && current.x >= second.x-1) &&
            (current.y <= second.y+1 && current.y >= second.y-1)) {
            console.log(second.name);
        }else if((current.x <= third.x+1 && current.x >= third.x-1) &&
            (current.y <= third.y+1 && current.y >= third.y-1)) {
            console.log(third.name);
        } else {
            console.log('space');
        }
        current.y+=1;

        if(current.y > 30 || current.x > 30) {
            return
        }

    }

}

solve([
    'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
])

console.log();

solve([

    'Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'


]);
console.log()
solve([
    'starScorpius 2.3 10',
    'starAltair 23.0 4',
    'starAquarius 17.6 3.3',
    '1.8 10.9',
    '14'
])