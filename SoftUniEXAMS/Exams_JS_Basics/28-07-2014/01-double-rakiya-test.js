function solve(input) {
    var start, end, str, sequenceOf2digits, output;

    start = Number(input[0]);
    end = Number(input[1]);

    console.log('<ul>');

    for (var number = start; number <= end; number++) {
        str = number.toString();
        output = '<li><span class=\'num\'>' + str + '</span></li>';
        for (var col = 0; col < str.length; col++) {
            sequenceOf2digits = str.substr(col, 2);
            if (sequenceOf2digits.length == 2 && str.indexOf(sequenceOf2digits, col+2) > -1) {
                output = '<li><span class=\'rakiya\'>' + str + '</span><a href=\"view.php?id=' + str + '>View<\/a></li>';
                col = str.length;
            }
        }
        console.log(output);
    }
    console.log('</ul>');
}

//solve([
//    '5', '8'
//]);
//
//
//solve([
//    '11210',
//    '11215'
//]);
