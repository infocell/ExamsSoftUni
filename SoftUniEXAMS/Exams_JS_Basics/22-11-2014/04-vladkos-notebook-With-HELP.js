function solve(input) {

    var result = {},
        output = {},
        tokens,
        color,
        prop,
        value,
        rank,
        sortedColor,
        key;

    input.forEach(function(line) {
        tokens = line.split('|');
        color = tokens[0];
        prop = tokens[1],
        value = tokens[2];
        //console.log(line);

        if(!result[color]){
            result[color] = {
                opponents : [],
                wins : 0,
                losses : 0
            };
        }

        switch (prop) {
            case 'age' :
            case 'name' :
                result[color][prop] = value;
                break;
            case 'win' :
                result[color].wins +=1;
                result[color].opponents.push(value);
                break;
            case 'loss' :
                result[color].losses +=1;
                result[color].opponents.push(value);
                break;
        }
    });

    sortedColor = Object.keys(result).sort();

    //console.log(sortedColor);

    for(i in sortedColor) {
        key = sortedColor[i];

        if(!result[key].name || !result[key].age){
            continue;
        }

        rank  = ((result[key].wins+1)/(result[key].losses+1)).toFixed(2);

        output[key] = {
            age : result[key].age,
            name: result[key].name,
            opponents: result[key].opponents,
            rank : rank
        };
    }
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
