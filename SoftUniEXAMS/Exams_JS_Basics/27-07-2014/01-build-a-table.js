function solve(input) {
    var start, end;
    start = Number(input[0]);
    end = Number(input[1]);
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');

    for (var i = start; i <= end; i++) {
        console.log('<tr><td>' + i + '</td><td>' + Math.pow(i, 2) + '</td><td>' + isFib(i) + '</td></tr>')

    }
    console.log('</table>');

    function isFib(number) {
        var prev = 0,
            next = 1,
            tmp = prev + next;
        while (tmp <= number) {
            if (tmp == number) {
                return 'yes';
            }
            prev = next;
            next = tmp;
            tmp = prev + next;
        }
        return 'no';
    }
}

//solve([
//    '2',
//    '6'
//]);
//
//solve([
//    '55', '56'
//]);
