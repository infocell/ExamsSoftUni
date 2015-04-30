function solve(input) {
    var lineArr = [],
        result = {},
        output = {},
        band,
        town,
        venue;


    input.forEach(function(line){
        lineArr = line.split('|');
        band = lineArr[0].trim();
        town = lineArr[1].trim();
        venue = lineArr[3].trim();

        if(!result[town]) {
            result[town] = {};
        }
        if(!result[town][venue]) {
            result[town][venue] = [];
        }
        if(result[town][venue].indexOf(band) == -1) {
            result[town][venue].push(band);
        }

    });

    output = sortedProperties(result);


    Object.keys(output).forEach(function(key){
        output[key] = sortedProperties(output[key]);

        Object.keys(output[key]).forEach(function(keyIn){
            output[key][keyIn].sort();
        });

    });



    function sortedProperties(obj) {
        var returnSortedObj = {};
        Object.keys(obj).sort().forEach(function(key){
            returnSortedObj[key] = obj[key];
        });
        return returnSortedObj;

    }


    console.log(JSON.stringify(output));


}

solve([
    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);