function solve(input) {
    //"use strict";
    var sum = 0;
    input = input.filter(function (elem) {
        var tmp = elem.split(/\s+/g);
        return (tmp[0].toLowerCase() === 'coin' || tmp[0].toLowerCase() === 'coins')
            && tmp[1] == parseInt(tmp[1]) && parseInt(tmp[1]) > 0;
    })

    input.forEach(function (elem) {
        elem = elem.split(/\s+/g);
        sum += parseInt(elem[1]);
    });

    //sum = 5123.00;
    //console.log(sum);
    console.log('gold : ' + Math.floor(sum / 100));
    console.log('silver : ' + Math.floor((sum % 100)/10));
    console.log('bronze : ' + Math.floor((sum % 10)));
}

solve([ 'Coin 1',
    'coin 2.0',
    'coins 5',
    'coin 10',
    'coin 20.0',
    'coin 50',
    'coin 100',
    'coin 200',
    'coin 500',
    'cigars 1' ]);
console.log();
solve([ 'coin 1 ',
    'coin two',
    'coin 5',
    'coin 10.50',
    'coin 20',
    'coin 50',
    'coin hundred',
    'cigars 1' ]);
