function solve(input) {

    var color,
        prop,
        value,
        result = {},
        output = {},
        line,
        sortedObj,
        colorKey,
        rank;


    input.forEach(function(elem) {
        line = elem.split('|');
        color = line[0].trim();
        prop = line[1].trim();
        value = line[2].trim();

        if(!result[color]){
            result[color] = {opponents: [], win: 0, loss : 0};
        }

        switch (prop) {
            case 'age' :
            case 'name':
                result[color][prop] = value;
                break;
            case 'win' :
                result[color][prop] += 1;
                result[color].opponents.push(value);
                break;
            case 'loss' :
                result[color][prop] += 1;
                result[color].opponents.push(value);

        }
    });

    sortedObj = Object.keys(result).sort();


    //sortedObj.forEach(function(elem){

    for(i in sortedObj) {

        colorKey = sortedObj[i];

        if (!result[colorKey].age || !result[colorKey].name) {
            continue;
        }

        result[colorKey].opponents.sort();

        rank = ((result[colorKey].win + 1) / (result[colorKey].loss + 1)).toFixed(2);
        output[colorKey] = {
            age : result[colorKey].age,
            name: result[colorKey].name,
            opponents: result[colorKey].opponents,
            rank: rank

        }


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