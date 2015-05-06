function solve(input) {

    var numbers = [];
    for (var i = 0; i < input.length; i++) {
        numbers[i] = Number(input[i]);
    }

    var a = numbers[0],
        b = numbers[1],
        c = numbers[2],
        x1, x2;

    x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a);
    x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a);

    console.log();

    if(isNaN(x1) || isNaN(x2)) {
        console.log('No real rots');
    } else if(x1 === x2) {
        console.log('X = ' + x1);
    } else {

        console.log('X1 = ' + x1);
        console.log('X2 = ' + x2);
    }
}

solve(["2", "5", "-3"]);
solve(["2", "-4", "2"]);
solve(["4", "2", "1"]);