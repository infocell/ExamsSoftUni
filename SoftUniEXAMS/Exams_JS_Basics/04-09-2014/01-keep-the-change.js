function solve(input) {

    var bill = parseFloat(input[0]),
        mood = input[1],
        tips;

    switch (mood) {
        case 'happy' :
            tips = bill * 10 / 100;
            break;
        case 'married' :
            tips = bill * 0.05 / 100;
            break;
        case 'drunk' :
            tips = Math.pow(bill*15/100, parseInt((bill*15/100).toString()[0]));
            break;
        default :
            tips = bill * 5 / 100;
            break;
    }
    console.log(tips.toFixed(2));
}

solve([
    '120.44',
    'happy'
]);

solve([
    '1230.83',
    'drunk'
]);

solve([
    '716.00',
    'bored'
]);

solve([ '716.00', 'married' ]);

