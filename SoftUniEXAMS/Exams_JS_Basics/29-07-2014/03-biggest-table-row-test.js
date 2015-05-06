function solve(input) {

    var maxSum = -Infinity,
        sum,
        output,
        match,
        regex = /<td>([\d.-]+)<\/td><td>([-\d.]+)<\/td><td>([-\d.]+)<\/td><\/tr>/g,
        numbersArr = [];

    input.forEach(function (currentLine) {
        numbersArr = [];
        sum = 0;
        while (match = regex.exec(currentLine)) {

            numbersArr.push(match[1]);
            numbersArr.push(match[2]);
            numbersArr.push(match[3]);

            numbersArr = numbersArr.filter(function (elem) {
                return elem !== '-';
            });

            numbersArr.forEach(function (elem) {
                sum += parseFloat(elem);
            });

            if (sum > maxSum && numbersArr.length !== 0) {
                maxSum = sum;
                output = maxSum + ' = ';
                numbersArr.forEach(function (elem) {
                    output += elem + ' + ';
                });
            }
        }
    });

    if (output) {
        if (output.indexOf('+') > -1) {
            output = output.substring(0, output.length - 2);
        }
    }
    output ? console.log(output) : console.log('no data');
}

//solve([
//    '<table>',
//    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//    '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
//    '<tr><td>Rousse</td><td>-</td><td>-</td><td>-</td></tr>'
//
//]);
//
//solve([
//    '<table>',
//    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//    '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
//    '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
//    '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
//    '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
//    '</table>'
//]);
