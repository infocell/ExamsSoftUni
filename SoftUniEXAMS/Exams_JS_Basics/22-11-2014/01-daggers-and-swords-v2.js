function solve(input) {
    //"use strict";
    var result, type, table ='';

    input = input.map(function (elem) {
        return Math.floor(Number(elem));
    }).filter(function (elem) {
        return elem > 10;
    });

    input.forEach(function (elem) {
        var fingers;
        elem > 40 ? type = 'sword' : type = 'dagger';
        fingers = elem % 5;
        switch (fingers) {
            case 1:
                result = 'blade';
                break;
            case 2:
                result = 'quite a blade';
                break;
            case 3:
                result = 'pants-scraper';
                break;
            case 4:
                result = 'frog-butcher';
                break;
            case 0:
                result = '*rap-poker';
            default:
                break;
        }
        table += '<tr><td>' + elem + '</td><td>' + type + '</td><td>' + result + '</td></tr>\n';
    });

        table = table.substring(0, table.length - 1);

    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    console.log(table);

    console.log('</tbody>');
    console.log('</table>');

    //console.log(type + ' ' + result)
    //console.log(input)
}

//solve([
//
//]);
//solve([
//    '17.8',
//    '19.4',
//    '13',
//    '55.8',
//    '126.96541651',
//    '3'
//]);
