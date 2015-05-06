function solve(input) {

    console.log('<table>\r\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    var start = Number(input[0]),
        end = Number(input[1]);

    for (var i = start; i <= end; i++) {
    var isFib = 'no';

        var first = 0,
            second = 1,
            sum = 0;

        for (var j = 0; j < i; j++) {
            sum = first + second;
            if(sum === i) {
                isFib = 'yes';
                break;
            }
            first = second;
            second = sum;
        }

        console.log('<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + isFib + '</td></tr>');
    }
    console.log('</table>');
}

solve(["1", "1"]);
