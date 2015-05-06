function solve(input) {

    input = input.join('\n');

    var reg = /\<tr\>\<td\>([^<]+)\<\/td\>\<td>([\-\d\.\d]+)\<\/td\>\<td>([\-\d\.\d]+)\<\/td\>\<td>([\-\d\.\d]+)\<\/td\>\<\/tr\>/g;
    var result,
        output = '',
        maxSum = -Infinity,
        sum;
    while(result = reg.exec(input)) {
        sum = 0;
        if(result[2] != '-' && result[2] != 'undefined')  sum += parseFloat(result[2]);
        if(result[3] != '-' && result[3] != 'undefined')  sum += parseFloat(result[3]);
        if(result[4] != '-' && result[4] != 'undefined')  sum += parseFloat(result[4]);
        if(result[2] == '-' && result[3] == '-' && result[4] == '-' && maxSum == -Infinity) {
            sum = undefined;
            output = undefined;
        }

        if(maxSum < sum) {
            maxSum = sum;
            //output = maxSum + ' = ' + result[2] + ' + ' + result[3] + ' + ' + result[4];
            output = maxSum + ' = ';
            for (var i = 2; i <= 4; i++) {
                if(result[i] != '-') {
                    output += result[i] + ' + ';
                }
            }
        }
    }
    output ? console.log(output.substring(0, output.length-2)): console.log('no data');
}

solve([
]);

solve([
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
'</table>'
]) ;

solve([
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>'
]);
