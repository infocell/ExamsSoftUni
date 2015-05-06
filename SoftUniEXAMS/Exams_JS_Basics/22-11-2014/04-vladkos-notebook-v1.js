function solve(input) {

    var line,
        color,
        prop,
        value,
        result = {},
        output = {},
        sordtedColorKey = [],
        rank;

    input.forEach(function(elem){
        line = elem.split('|');
        color = line[0];
        prop = line[1];
        value = line[2];

        if(!result[color]){
            result[color] = {win: 0, loss: 0, opponents: []};
        }

        switch (prop) {
            case 'age' :
                result[color][prop] = value;
                break;
            case 'name' :
                result[color][prop] = value;
                break;
            case 'win' :
                result[color].win += 1;
                result[color].opponents.push(value);
                break;
            case 'loss' :
                result[color].loss += 1;
                result[color].opponents.push(value);
                break;
        }
    });

    Object.keys(result).sort().forEach(function(keyColor){
        if(result[keyColor].age && result[keyColor].name) {
            result[keyColor].opponents.sort();
            rank= ((result[keyColor].win + 1)/(result[keyColor].loss + 1)).toFixed(2);

            output[keyColor] = {
                age: result[keyColor].age,
                name: result[keyColor].name,
                opponents: result[keyColor].opponents,
                rank: rank
            };
        }
    });

    console.log(JSON.stringify(output));
}

solve([
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);
