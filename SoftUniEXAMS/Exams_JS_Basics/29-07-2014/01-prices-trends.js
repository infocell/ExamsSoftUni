function solve(input) {
    var number,
        trend,
        prevNumber;

    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');

    input.forEach(function(line) {
        number = Number(parseFloat(line).toFixed(2));
        if(prevNumber == undefined) {
            trend = 'fixed.png';
        } else {
            if(prevNumber == number) {
                trend = 'fixed.png';
            } else if (prevNumber < number) {
                trend = 'up.png';
            } else if(prevNumber > number) {
                trend = 'down.png';
            }
        }
        console.log('<tr><td>'+ number.toFixed(2) + '</td><td><img src="' + trend + '"/></td></td>');
        prevNumber = number;
    });
    console.log('</table>');
}

solve([

]);

solve([

    '36.333',
    '36.5',
    '37.019',
    '35.4',
    '35',
    '35.001',
    '36.225'

]);
